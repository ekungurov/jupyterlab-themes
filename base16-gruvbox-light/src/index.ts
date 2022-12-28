import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for base16-gruvbox-light
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'base16-gruvbox-light:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@ekungurov/base16-gruvbox-light/index.css';

    manager.register({
      name: 'base16-gruvbox-light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
