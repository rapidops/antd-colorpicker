import { CSSProperties } from 'react';
import { Color, ColorResult } from 'react-color';
interface HSVColor {
    a?: number | undefined;
    h: number;
    s: number;
    v: number;
}
export declare type ColorPickerTypes = 'BlockPicker' | 'ChromePicker' | 'CirclePicker' | 'CompactPicker' | 'GithubPicker' | 'GooglePicker' | 'HuePicker' | 'MaterialPicker' | 'PhotoshopPicker' | 'SketchPicker' | 'SliderPicker' | 'SwatchesPicker' | 'TwitterPicker';
export declare type ColorPickerValue = Color | HSVColor;
export declare type ColorPickerResult = ColorResult;
export declare type AnyColorFormat = ColorPickerResult | ColorPickerValue;
declare type Props = {
    popup?: boolean;
    value?: AnyColorFormat;
    onChange?: (value: any) => void;
    onChangeComplete?: (value: any) => void;
    onColorResult?: (color: ColorPickerResult) => AnyColorFormat;
    blockStyles?: CSSProperties;
    picker?: ColorPickerTypes;
    popoverProps?: any;
    [key: string]: any;
};
declare type FC<P> = ((props: P) => JSX.Element) & {
    propTypes: {
        [key: string]: any;
    };
};
declare const Colorpicker: FC<Props>;
export default Colorpicker;
