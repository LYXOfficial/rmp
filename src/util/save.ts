import { MultiDirectedGraph } from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { NodeAttributes, EdgeAttributes, GraphAttributes } from '../constants/constants';
import { ParamState } from '../redux/param/param-slice';

export interface RMPSave {
    version: number;
    /**
     * Graph generated by `graph.export()`.
     * Note that graph in AppState is string and using SerializedGraph
     * here would help users alter their save without a browser.
     */
    graph: SerializedGraph<NodeAttributes, EdgeAttributes, GraphAttributes>;
    svgViewBoxZoom: number;
    svgViewBoxMin: { x: number; y: number };
}

export const CURRENT_VERSION = 2;

/**
 * Contains all version upgrade functions.
 * Starting from 0, it should be possible to upgrade the save to CURRENT_VERSION.
 */
export const UPGRADE_COLLECTION: { [version: number]: (param: string) => string } = {
    0: param =>
        // Add svgViewBoxZoom and svgViewBoxMin to the save.
        JSON.stringify({
            version: 1,
            graph: JSON.parse(param)?.graph,
            svgViewBoxZoom: 100,
            svgViewBoxMin: { x: 0, y: 0 },
        }),
    1: param => {
        // Remove `transfer` field in `StationAttributes`.
        const p = JSON.parse(param);
        const graph = new MultiDirectedGraph() as MultiDirectedGraph<NodeAttributes, EdgeAttributes, GraphAttributes>;
        graph.import(p?.graph);
        graph
            .filterNodes((node, attr) => node.startsWith('stn'))
            .forEach(node => {
                const type = graph.getNodeAttribute(node, 'type');
                const attr = graph.getNodeAttribute(node, type) as any;
                if (attr && 'transfer' in attr) delete attr.transfer;
                graph.mergeNodeAttributes(node, { [type]: attr });
            });
        return JSON.stringify({
            ...p,
            version: 2,
            graph: graph.export(),
        });
    },
};

// Load shanghai template only if param is missing or invalid.
const getInitialParam = async () =>
    JSON.stringify((await import(/* webpackChunkName: "template" */ '../saves/shanghai.json')).default);

/**
 * Upgrade the passed param to the latest format.
 */
export const upgrade: (originalParam: string | null) => Promise<string> = async originalParam => {
    if (!originalParam) return await getInitialParam();

    const originalSave = JSON.parse(originalParam);
    if (!('version' in originalSave) || !Number.isInteger(originalSave.version)) return await getInitialParam();

    let version = Number(originalSave.version);
    let save = JSON.stringify(originalSave);
    while (version in UPGRADE_COLLECTION) {
        save = UPGRADE_COLLECTION[version](save);
        version = Number(JSON.parse(save).version);
    }

    // version should be CURRENT_VERSION now
    return save;
};

/**
 * Return a valid save string from ParamState.
 */
export const stringifyParam = (paramState: ParamState) => {
    const save: RMPSave = { ...paramState, graph: JSON.parse(paramState.graph), version: CURRENT_VERSION };
    return JSON.stringify(save);
};
