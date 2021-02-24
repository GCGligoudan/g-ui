import Vue from 'vue';

interface IMsgBoxOptions {
  title: string;
  content: string;
  showCancelButton: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
}
interface IMsgOptions {
  message: string;
  type?: string;
}

export interface ILoading {
  open(options: string): void;
  close(): void;
}

export interface IMessageBox {
  showMsgBox(option: IMsgBoxOptions): Promise<string>;
}

export interface IMsg {
  show(options: IMsgOptions): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $GLoading: ILoading;
    $GMessage: IMessageBox;
    $GMsg: IMsg;
  }
}
