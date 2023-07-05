// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module '*.vue' {
	import { type defineComponent } from 'vue';
	const component: ReturnType<typeof defineComponent>;
	export default component;
}
interface ImportMetaEnv {
	readonly VITE_SUI_TEST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
