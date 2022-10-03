const _browser = chrome
const _menus = _browser.contextMenus

_menus.create({
  id: 'copy-link-text',
  title: _browser.i18n.getMessage('menuItemCopyLinkText'),
  contexts: ['all']
})

_menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'copy-link-text':
      _browser.tabs.sendMessage(tab.id, { type: 'link' }, { frameId: info.frameId })
      break
    default:
      break
  }
})
