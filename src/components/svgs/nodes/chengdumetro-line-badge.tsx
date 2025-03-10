import { MonoColour } from '@railmapgen/rmg-palette-resources';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { AttrsProps, CityCode } from '../../../constants/constants';
import { MiscNodeType, Node, NodeComponentProps } from '../../../constants/nodes';
import { AttributesWithColor, ColorField } from '../../panels/details/color-field';
import { MultilineText } from '../common/multiline-text';

const ChengduMetroLineBadge = (props: NodeComponentProps<ChengduMetroLineBadgeAttributes>) => {
    const { id, x, y, attrs, handlePointerDown, handlePointerMove, handlePointerUp } = props;
    const {
        num = defaultChengduMetroLineBadgeAttributes.num,
        color = defaultChengduMetroLineBadgeAttributes.color,
        type = defaultChengduMetroLineBadgeAttributes.type,
    } = attrs ?? defaultChengduMetroLineBadgeAttributes;

    const onPointerDown = React.useCallback(
        (e: React.PointerEvent<SVGElement>) => handlePointerDown(id, e),
        [id, handlePointerDown]
    );
    const onPointerMove = React.useCallback(
        (e: React.PointerEvent<SVGElement>) => handlePointerMove(id, e),
        [id, handlePointerMove]
    );
    const onPointerUp = React.useCallback(
        (e: React.PointerEvent<SVGElement>) => handlePointerUp(id, e),
        [id, handlePointerUp]
    );

    const fgColor = color[3];
    const fontSize = 16;

    return (
        <g
            id={id}
            transform={`translate(${x - 12.5}, ${y - 12.5})`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            style={{ cursor: 'move' }}
        >
            {type == 'normal' ? (
                <>
                    <rect fill={color[2]} x="0" width="25" height="25" rx="12.5" ry="12.5" />
                    <text
                        className="rmp-name__zh"
                        textAnchor="middle"
                        x="12.5"
                        y="12.5"
                        fill={fgColor}
                        fontSize={fontSize}
                        dominantBaseline="central"
                    >
                        {num}
                    </text>
                </>
            ) : type == 'suburban' ? (
                <>
                    <rect fill={color[2]} x="0" y="0" width="20" height="25" rx="0" ry="0" />
                    <rect fill={color[2]} x="19" y="0" width="6" height="5" rx="0" ry="0" />
                    <rect fill={color[2]} x="19" y="10" width="6" height="5" rx="0" ry="0" />
                    <rect fill={color[2]} x="19" y="20" width="6" height="5" rx="0" ry="0" />
                    <text
                        className="rmp-name__zh"
                        textAnchor="left"
                        x="0"
                        y="12.5"
                        fill={fgColor}
                        fontSize={fontSize}
                        dominantBaseline="central"
                        style={{ fontFamily: '"Microsoft YaHei","Sogoe UI",Arial,sans-serif' }}
                    >
                        {num}
                    </text>
                </>
            ) : (
                <>
                    <rect fill={color[2]} x="-1.25" y="0" width="27.5" height="7.5" rx="0" ry="0" />
                    <rect fill={color[2]} x="7.5" y="0" width="10" height="25" rx="0" ry="0" />
                    <MultilineText
                        text={num.toString().split('')}
                        lineHeight={10.5}
                        x={12.5}
                        y={6.5}
                        fill="white"
                        fontSize={10}
                        textAnchor="middle"
                        grow="down"
                        dominantBaseline="middle"
                    />
                </>
            )}
        </g>
    );
};

/**
 * ChengduMetroLineBadge specific props.
 */
export interface ChengduMetroLineBadgeAttributes extends AttributesWithColor {
    num: number | string;
    type: 'normal' | 'suburban' | 'tram';
}

const defaultChengduMetroLineBadgeAttributes: ChengduMetroLineBadgeAttributes = {
    num: 1,
    color: [CityCode.Chengdu, 'cd1', '#222a8c', MonoColour.white],
    type: 'normal',
};

const ChengduMetroLineBadgeAttrsComponent = (props: AttrsProps<ChengduMetroLineBadgeAttributes>) => {
    const { id, attrs, handleAttrsUpdate } = props;
    const { t } = useTranslation();
    const fields: RmgFieldsField[] = [
        {
            type: 'input',
            label: t('panel.details.nodes.common.num'),
            value: (attrs ?? defaultChengduMetroLineBadgeAttributes).num as string,
            validator: (val: string) => !Number.isNaN(val),
            onChange: (val: string | number) => {
                if (Number.isNaN(Number(val))) {
                    attrs.num = val;
                } else {
                    attrs.num = Number(val);
                }
                handleAttrsUpdate(id, attrs);
            },
            minW: 'full',
        },
        {
            type: 'custom',
            label: t('color'),
            component: (
                <ColorField
                    type={MiscNodeType.ChengduMetroLineBadge}
                    defaultTheme={defaultChengduMetroLineBadgeAttributes.color}
                />
            ),
            minW: 'full',
        },
        {
            type: 'select',
            label: t('panel.details.nodes.chengduMetroLineBadge.type.displayName'),
            value: (attrs ?? defaultChengduMetroLineBadgeAttributes).type,
            options: {
                normal: t('panel.details.nodes.chengduMetroLineBadge.type.normal'),
                suburban: t('panel.details.nodes.chengduMetroLineBadge.type.suburban'),
                tram: t('panel.details.nodes.chengduMetroLineBadge.type.tram'),
            },
            onChange: val => {
                attrs.type = val as 'normal' | 'suburban' | 'tram';
                handleAttrsUpdate(id, attrs);
            },
            minW: 'full',
        },
    ];
    return <RmgFields fields={fields} />;
};

const chengduMetroLineBadgeIcon = (
    <svg viewBox="0 0 24 24" height={40} width={40} focusable={false}>
        <rect fill="currentColor" x="2" y="2" rx="10" ry="10" width="20" height="20" />
        <text x="9" y="17" fill="white" fontSize="14">
            1
        </text>
    </svg>
);

const chengduMetroLineBadge: Node<ChengduMetroLineBadgeAttributes> = {
    component: ChengduMetroLineBadge,
    icon: chengduMetroLineBadgeIcon,
    defaultAttrs: defaultChengduMetroLineBadgeAttributes,
    attrsComponent: ChengduMetroLineBadgeAttrsComponent,
    metadata: {
        displayName: 'panel.details.nodes.chengduMetroLineBadge.displayName',
        tags: [],
    },
};

export default chengduMetroLineBadge;
