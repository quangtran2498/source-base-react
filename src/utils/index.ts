import PopupService from './PopupService';

export const goBack = () => {
    // if (window?.ReactNativeWebView) {
    //   window?.ReactNativeWebView?.postMessage(
    //     JSON.stringify({
    //       type: 'go_back',
    //       source: 'web_mobile',
    //     })
    //   );
    // }
  };
  export const TestPopupGlobal = () => {
    PopupService.instance.current.open({
      visible: true,
      content:"test",
      onOk: () => {
        PopupService.instance.current.close();
        // goBack();
      },
    });
  };