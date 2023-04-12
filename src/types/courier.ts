export interface CourierConfig {
  apiUrl?: string;
  inboxApiUrl?: string;
  authorization?: string;
  brandId?: string;
  clientKey: string;
  onRouteChange?: (route: string) => void;
  components?: {
    inbox?: any;
    toast?: any;
    preferences?: any;
  };
  unsubscribePage?: {
    topicId: string;
    preferencePageUrl: string;
    list?: string;
  };
  initOnLoad?: boolean;
  userId?: string;
  userSignature?: string;
  wsOptions?: any;
  preferencePageDraftMode?: boolean;
}

export interface CourierSDK {
  init: (config: CourierConfig) => void;
  on: (action: string, event: any) => void;
  toast?: {
    mergeConfig?: (config: any) => void;
    setConfig?: (config: any) => void;
    add?: (message: { title?: string; preview?: string }) => void;
  };
  inbox?: {
    mergeConfig?: (config: any) => void;
    setConfig?: (config: any) => void;
    config?: any;
  };
  transport?: any;
}

declare global {
  interface Window {
    courier: CourierSDK;
    courierAsyncInit?: () => void | Array<() => void>;
  }
}
