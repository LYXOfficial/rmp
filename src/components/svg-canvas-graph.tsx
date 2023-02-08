import React from 'react';
import useEvent from 'react-use-event-hook';
import { nanoid } from 'nanoid';
import { useRootDispatch, useRootSelector } from '../redux';
import { saveGraph } from '../redux/param/param-slice';
import {
    setActive,
    addSelected,
    setRefreshNodes,
    setRefreshEdges,
    setMode,
    clearSelected,
} from '../redux/runtime/runtime-slice';
import { StnId, LineId, MiscNodeId } from '../constants/constants';
import { LineStyleType, LinePathType, ExternalLineStyleAttributes, LineStyleComponentProps } from '../constants/lines';
import allStations from './svgs/stations/stations';
import { linePaths, lineStyles } from './svgs/lines/lines';
import LineWrapper from './svgs/lines/line-wrapper';
import miscNodes from './svgs/nodes/misc-nodes';
import { getMousePosition, roundToNearestN } from '../util/helpers';
import reconcileLines, { generateReconciledPath } from '../util/reconcile';
import { getStations, getMiscNodes, getLines } from '../util/process-elements';

const SvgCanvas = () => {
    const dispatch = useRootDispatch();

    const {
        selected,
        refresh: { nodes: refreshNodes, edges: refreshEdges },
        mode,
        active,
        theme,
    } = useRootSelector(state => state.runtime);
    const { svgViewBoxZoom } = useRootSelector(state => state.param);
    const refreshAndSave = () => {
        dispatch(setRefreshNodes());
        dispatch(setRefreshEdges());
        dispatch(saveGraph(graph.current.export()));
    };

    const graph = React.useRef(window.graph);

    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const [newLinePosition, setNewLinePosition] = React.useState({ x: 0, y: 0 });

    const handlePointerDown = useEvent((node: StnId | MiscNodeId, e: React.PointerEvent<SVGElement>) => {
        e.stopPropagation();

        const el = e.currentTarget;
        const { x, y } = getMousePosition(e);
        el.setPointerCapture(e.pointerId);

        setOffset({ x, y });

        dispatch(setActive(node)); // svg mouse event only
        // details panel only, remove all if this is not a multiple selection
        if (!e.shiftKey && selected.length <= 1) dispatch(clearSelected());
        dispatch(addSelected(node)); // details panel only
        // console.log('down ', graph.current.getNodeAttributes(node));
    });
    const handlePointerMove = useEvent((node: StnId | MiscNodeId, e: React.PointerEvent<SVGElement>) => {
        e.stopPropagation();

        const { x, y } = getMousePosition(e);

        if (mode === 'free' && active === node) {
            selected.forEach(s => {
                graph.current.updateNodeAttributes(s, attr => ({
                    ...attr,
                    x: roundToNearestN(attr.x - ((offset.x - x) * svgViewBoxZoom) / 100, e.altKey ? 1 : 5),
                    y: roundToNearestN(attr.y - ((offset.y - y) * svgViewBoxZoom) / 100, e.altKey ? 1 : 5),
                }));
            });
            dispatch(setRefreshNodes());
            dispatch(setRefreshEdges());
            // console.log('move ', graph.current.getNodeAttributes(node));
        } else if (mode.startsWith('line')) {
            setNewLinePosition({
                x: ((offset.x - x) * svgViewBoxZoom) / 100,
                y: ((offset.y - y) * svgViewBoxZoom) / 100,
            });
        }
    });
    const handlePointerUp = useEvent((node: StnId | MiscNodeId, e: React.PointerEvent<SVGElement>) => {
        e.stopPropagation();

        if (mode.startsWith('line') || mode.startsWith('misc-edge')) {
            dispatch(setMode('free'));

            const prefixs = ['stn_core_', 'virtual_circle_'];
            prefixs.forEach(prefix => {
                const elems = document.elementsFromPoint(e.clientX, e.clientY);
                const id = elems[0].attributes?.getNamedItem('id')?.value;
                if (id?.startsWith(prefix)) {
                    const type = mode.slice(5) as LinePathType;
                    const newLineId = `line_${nanoid(10)}`;
                    graph.current.addDirectedEdgeWithKey(newLineId, active, id.slice(prefix.length), {
                        visible: true,
                        zIndex: 0,
                        type,
                        // deep copy to prevent mutual reference
                        [type]: JSON.parse(JSON.stringify(linePaths[type].defaultAttrs)),
                        style: LineStyleType.SingleColor,
                        [LineStyleType.SingleColor]: { color: theme },
                        reconcileId: '',
                    });
                }
            });
        } else if (mode === 'free') {
            // check the offset and if it's not 0, it must be a click not move
            // then dispatch the current station/line to display the details
            const { x, y } = getMousePosition(e);
            if (offset.x - x === 0 && offset.y - y === 0) {
                dispatch(setActive(node)); // svg mouse event only
            }
        }
        dispatch(setActive(undefined)); // svg mouse event only
        refreshAndSave();
        // console.log('up ', graph.current.getNodeAttributes(node));
    });
    const handleEdgeClick = useEvent((edge: LineId, e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        dispatch(clearSelected());
        dispatch(addSelected(edge));
    });

    // These are states that the svg draws from.
    // They are updated by refresh trigger in runtime slice.
    const [stations, setStations] = React.useState(getStations(graph.current));
    const [lines, setLines] = React.useState(getLines(graph.current));
    const [nodes, setNodes] = React.useState(getMiscNodes(graph.current));
    const [reconciledLines, setReconciledLines] = React.useState([] as LineId[][]);
    const [danglingLines, setDanglingLines] = React.useState([] as LineId[]);
    React.useEffect(() => {
        setStations(getStations(graph.current));
        setLines(getLines(graph.current));
        setNodes(getMiscNodes(graph.current));
    }, [refreshNodes]);
    React.useEffect(() => {
        setLines(getLines(graph.current));
        const { allReconciledLines, danglingLines } = reconcileLines(graph.current);
        setReconciledLines(allReconciledLines);
        setDanglingLines(danglingLines);
    }, []);
    React.useEffect(() => {
        setLines(getLines(graph.current));
        const { allReconciledLines, danglingLines } = reconcileLines(graph.current);
        setReconciledLines(allReconciledLines);
        setDanglingLines(danglingLines);
    }, [refreshEdges]);

    return (
        <>
            {nodes.map(n => {
                const { node, x, y, type } = n;
                const MiscNodeComponent = miscNodes[type].component;
                return (
                    <MiscNodeComponent
                        id={node}
                        key={node}
                        x={x}
                        y={y}
                        // @ts-expect-error
                        attrs={n[type]}
                        handlePointerDown={handlePointerDown}
                        handlePointerMove={handlePointerMove}
                        handlePointerUp={handlePointerUp}
                    />
                );
            })}
            {danglingLines.map(edge => {
                const [source, target] = graph.current.extremities(edge);
                const sourceAttr = graph.current.getNodeAttributes(source);
                const targetAttr = graph.current.getNodeAttributes(target);
                return (
                    <LineWrapper
                        id={edge}
                        key={edge}
                        x1={sourceAttr.x}
                        y1={sourceAttr.y}
                        x2={targetAttr.x}
                        y2={targetAttr.y}
                        newLine={false}
                        type={LinePathType.Simple}
                        attrs={linePaths[LinePathType.Simple].defaultAttrs}
                        styleType={LineStyleType.SingleColor}
                        styleAttrs={{ color: ['', '', '#c0c0c0', '#fff'] }}
                        handleClick={handleEdgeClick}
                    />
                );
            })}
            {reconciledLines.map(reconciledLine => {
                const path = generateReconciledPath(graph.current, reconciledLine);
                if (!path) return <></>;

                const id = reconciledLine.at(0)!;
                const style = graph.current.getEdgeAttribute(id, 'style');
                const styleAttrs = graph.current.getEdgeAttribute(id, style) as NonNullable<
                    ExternalLineStyleAttributes[keyof ExternalLineStyleAttributes]
                >;
                const StyleComponent = lineStyles[style].component as <
                    T extends NonNullable<ExternalLineStyleAttributes[keyof ExternalLineStyleAttributes]>
                >(
                    props: LineStyleComponentProps<T>
                ) => JSX.Element;

                return (
                    <StyleComponent
                        id={id}
                        key={id}
                        path={path}
                        styleAttrs={styleAttrs}
                        newLine={false}
                        handleClick={handleEdgeClick}
                    />
                );
            })}
            {lines.map(({ edge, x1, y1, x2, y2, type, attr, style, styleAttr }) => {
                return (
                    <LineWrapper
                        id={edge}
                        key={edge}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        newLine={false}
                        type={type}
                        attrs={attr}
                        styleType={style}
                        styleAttrs={styleAttr}
                        handleClick={handleEdgeClick}
                    />
                );
            })}
            {stations.map(station => {
                const { node, x, y, type } = station;
                const StationComponent = allStations[type].component;
                return (
                    <StationComponent
                        id={node}
                        key={node}
                        x={x}
                        y={y}
                        attrs={{ [type]: station[type] }}
                        handlePointerDown={handlePointerDown}
                        handlePointerMove={handlePointerMove}
                        handlePointerUp={handlePointerUp}
                    />
                );
            })}
            {mode.startsWith('line') && active && (
                <LineWrapper
                    // @ts-expect-error
                    id="create_in_progress___no_use"
                    x1={graph.current.getNodeAttribute(active, 'x')}
                    y1={graph.current.getNodeAttribute(active, 'y')}
                    x2={graph.current.getNodeAttribute(active, 'x') - newLinePosition.x}
                    y2={graph.current.getNodeAttribute(active, 'y') - newLinePosition.y}
                    newLine={true}
                    type={mode.slice(5) as LinePathType}
                    attrs={linePaths[mode.slice(5) as LinePathType]}
                    styleType={LineStyleType.SingleColor}
                    styleAttrs={{ color: theme }}
                />
            )}
        </>
    );
};

export default SvgCanvas;
