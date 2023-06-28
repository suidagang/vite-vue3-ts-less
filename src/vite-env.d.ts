// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
interface ImportMetaEnv {
	readonly VITE_SUI_TEST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
