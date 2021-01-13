import { isText } from 'dom-element-types';
import { copy as copyToClipboard } from './helpers/clipboard';

export function copy({ selectedElement }) {
  copyToClipboard(selectedElement);
}

function handleSwitchOnSelectElement(selectedElement) {
  if (!selectedElement.classList.contains('hands-free-scrollable')) {
    return isText(selectedElement);
  }
  return false;
}

export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-font',
  contexts: [{
    context: 'textOptions',
    name: 'i18n-name',
    htmlExample: 'i18n-html-example',
    switchOnSelectElement: handleSwitchOnSelectElement,
    commands: [{
      name: 'i18n-command.copy',
      action: copy,
      help: 'i18n-help.copy',
      group: 'i18n-group.copy',
      switchToContext: 'root',
    }],
    i18n: {
      en: {
        name: 'Text Actions',
        'command.copy': 'copy',
        'help.copy': 'Copies the selected text',
        'group.copy': 'Copy text',
        copy: 'Copy',
        'html-example': 'Use the command "select" or "select text" to select this text',
      },
      es: {
        name: 'Opciones de Texto',
        'command.copy': 'copiar',
        'help.copy': 'Copiar el texto seleccionado',
        'group.copy': 'Copiar texto',
        copy: 'Copiar',
        'html-example': 'Usar comando "seleccionar" o "seleccionar texto" para seleccionar esta línea de texto',
      },
      pt: {
        name: 'Funções de Texto',
        'command.copy': 'copiar',
        'help.copy': 'Copia o texto selecionado',
        'group.copy': 'Copia o texto',
        copy: 'Copiar',
        'html-example': 'Use o comando "copiar" ou "selecionar texto" para selecionar o texto',
      },
      yue: {
        name: '文字動作',
        'command.copy': '複製',
        'help.copy': '複製已選取的文字',
        'group.copy': '複製文字',
        copy: '複製',
        'html-example': '利用「選取」或「選取文字」來選取這個文字',
      },
    },
  }],
  i18n: {
    en: {
      name: 'Text options',
      description: 'After select a text it allows you to perform some action.',
    },
    es: {
      name: 'Opciones de texto',
      description: 'Al seleccionar un texto permite ejecutar algunas acciones.',
    },
    pt: {
      name: 'Opções de Texto',
      description: 'Após selecionar um texto permite que seja executado alguma ação.',
    },
    yue: {
      name: '文字選項',
      description: '選取文字後，你可以執行一些動作。',
    },
  },
};
