/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MutButton {
        "disabled": boolean;
        "type": 'default' | 'primary';
    }
    interface MutInput {
        "disabled": boolean;
        "invalid": boolean;
        "label": string;
        "max": number;
        "maxlength": number;
        "min": number;
        "minlength": number;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "type": 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
        "valid": boolean;
        "value": string;
    }
    interface MutTabs {
        "tabClicked": (panel: string) => Promise<void>;
    }
    interface MutTabsPanel {
        "active": boolean;
    }
    interface MutTabsTab {
        "active": boolean;
        "panel": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMutButtonElement extends Components.MutButton, HTMLStencilElement {
    }
    var HTMLMutButtonElement: {
        prototype: HTMLMutButtonElement;
        new (): HTMLMutButtonElement;
    };
    interface HTMLMutInputElement extends Components.MutInput, HTMLStencilElement {
    }
    var HTMLMutInputElement: {
        prototype: HTMLMutInputElement;
        new (): HTMLMutInputElement;
    };
    interface HTMLMutTabsElement extends Components.MutTabs, HTMLStencilElement {
    }
    var HTMLMutTabsElement: {
        prototype: HTMLMutTabsElement;
        new (): HTMLMutTabsElement;
    };
    interface HTMLMutTabsPanelElement extends Components.MutTabsPanel, HTMLStencilElement {
    }
    var HTMLMutTabsPanelElement: {
        prototype: HTMLMutTabsPanelElement;
        new (): HTMLMutTabsPanelElement;
    };
    interface HTMLMutTabsTabElement extends Components.MutTabsTab, HTMLStencilElement {
    }
    var HTMLMutTabsTabElement: {
        prototype: HTMLMutTabsTabElement;
        new (): HTMLMutTabsTabElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mut-button": HTMLMutButtonElement;
        "mut-input": HTMLMutInputElement;
        "mut-tabs": HTMLMutTabsElement;
        "mut-tabs-panel": HTMLMutTabsPanelElement;
        "mut-tabs-tab": HTMLMutTabsTabElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MutButton {
        "disabled"?: boolean;
        "type"?: 'default' | 'primary';
    }
    interface MutInput {
        "disabled"?: boolean;
        "invalid"?: boolean;
        "label"?: string;
        "max"?: number;
        "maxlength"?: number;
        "min"?: number;
        "minlength"?: number;
        "onMutChange"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "type"?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
        "valid"?: boolean;
        "value"?: string;
    }
    interface MutTabs {
    }
    interface MutTabsPanel {
        "active"?: boolean;
    }
    interface MutTabsTab {
        "active"?: boolean;
        "panel"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mut-button": MutButton;
        "mut-input": MutInput;
        "mut-tabs": MutTabs;
        "mut-tabs-panel": MutTabsPanel;
        "mut-tabs-tab": MutTabsTab;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mut-button": LocalJSX.MutButton & JSXBase.HTMLAttributes<HTMLMutButtonElement>;
            "mut-input": LocalJSX.MutInput & JSXBase.HTMLAttributes<HTMLMutInputElement>;
            "mut-tabs": LocalJSX.MutTabs & JSXBase.HTMLAttributes<HTMLMutTabsElement>;
            "mut-tabs-panel": LocalJSX.MutTabsPanel & JSXBase.HTMLAttributes<HTMLMutTabsPanelElement>;
            "mut-tabs-tab": LocalJSX.MutTabsTab & JSXBase.HTMLAttributes<HTMLMutTabsTabElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
