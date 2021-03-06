
declare module BABYLON.GUI {
    /**
     * Class used to create 2D buttons
     */
    export class Button extends Rectangle {
        name?: string | undefined;
        /**
         * Function called to generate a pointer enter animation
         */
        pointerEnterAnimation: () => void;
        /**
         * Function called to generate a pointer out animation
         */
        pointerOutAnimation: () => void;
        /**
         * Function called to generate a pointer down animation
         */
        pointerDownAnimation: () => void;
        /**
         * Function called to generate a pointer up animation
         */
        pointerUpAnimation: () => void;
        /**
         * Gets or sets a boolean indicating that the button will let internal controls handle picking instead of doing it directly using its bounding info
         */
        delegatePickingToChildren: boolean;
        private _image;
        /**
         * Returns the image part of the button (if any)
         */
        get image(): BABYLON.Nullable<Image>;
        private _textBlock;
        /**
         * Returns the image part of the button (if any)
         */
        get textBlock(): BABYLON.Nullable<TextBlock>;
        /**
         * Creates a new Button
         * @param name defines the name of the button
         */
        constructor(name?: string | undefined);
        protected _getTypeName(): string;
        /** @hidden */
        _processPicking(x: number, y: number, type: number, pointerId: number, buttonIndex: number, deltaX?: number, deltaY?: number): boolean;
        /** @hidden */
        _onPointerEnter(target: Control): boolean;
        /** @hidden */
        _onPointerOut(target: Control, force?: boolean): void;
        /** @hidden */
        _onPointerDown(target: Control, coordinates: BABYLON.Vector2, pointerId: number, buttonIndex: number): boolean;
        /** @hidden */
        _onPointerUp(target: Control, coordinates: BABYLON.Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
        /**
         * Creates a new button made with an image and a text
         * @param name defines the name of the button
         * @param text defines the text of the button
         * @param imageUrl defines the url of the image
         * @returns a new Button
         */
        static CreateImageButton(name: string, text: string, imageUrl: string): Button;
        /**
         * Creates a new button made with an image
         * @param name defines the name of the button
         * @param imageUrl defines the url of the image
         * @returns a new Button
         */
        static CreateImageOnlyButton(name: string, imageUrl: string): Button;
        /**
         * Creates a new button made with a text
         * @param name defines the name of the button
         * @param text defines the text of the button
         * @returns a new Button
         */
        static CreateSimpleButton(name: string, text: string): Button;
        /**
         * Creates a new button made with an image and a centered text
         * @param name defines the name of the button
         * @param text defines the text of the button
         * @param imageUrl defines the url of the image
         * @returns a new Button
         */
        static CreateImageWithCenterTextButton(name: string, text: string, imageUrl: string): Button;
    }
}
