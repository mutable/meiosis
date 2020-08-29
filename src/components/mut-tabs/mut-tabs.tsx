import { Component, h, Method } from '@stencil/core';

export interface HTMLMutTabElement extends HTMLElement {
  active: boolean;
  panel: string;
  disabled: boolean;
}

export interface HTMLMutTabPanelElement extends HTMLElement {
  tab: string;
  active: boolean;
}

@Component({
  tag: 'mut-tabs',
  styleUrl: 'mut-tabs.css',
  shadow: true,
})

export class MutTabs {
  activeTab: HTMLMutTabElement;
  body: HTMLElement;
  tabs: HTMLElement;

  @Method()
  async tabClicked(panel: string) {
    const findTab = this.getAllTabs().find(el => el.getAttribute('panel') === panel)

    if (findTab) {
      this.setActiveTab(findTab);
    }
  }

  componentDidLoad() {
    this.setActiveTab(this.getActiveTab() || this.getAllTabs()[0]);
  }

  getActiveTab() {
    return this.getAllTabs().find(el => el.active);
  }

  getAllTabs() {
    if (this.tabs) {
      const slot = this.tabs.querySelector('slot');
      return [...slot.assignedElements()].filter((el: any) => {
        return el.tagName.toLowerCase() === 'mut-tabs-tab' && !el.disabled;
      }) as [HTMLMutTabElement];
    }
  }

  getAllPanels() {
    if (this.body) {
      const slot = this.body.querySelector('slot');
      return [...slot.assignedElements()].filter((el: any) => el.tagName.toLowerCase() === 'mut-tabs-panel') as [
        HTMLMutTabPanelElement
      ];
    }
  }

  setActiveTab(tab: HTMLMutTabElement) {
    if (tab && tab !== this.activeTab && !tab.disabled) {
      this.activeTab = tab;

      this.getAllTabs().map(el => (el.active = el === this.activeTab));
      this.getAllPanels().map(el => {
        return (el.active = el.getAttribute('tab') === this.activeTab.getAttribute('panel'));
      })
    }
  }

  render() {
    return (
      <div>
        <div class="tabs" ref={el => this.tabs = el as HTMLElement}>
          <slot name="tabs" />
        </div>
        <div class="panels" ref={el => (this.body = el)}>
          <slot name="content" />
        </div>
      </div>
    );
  }

}
