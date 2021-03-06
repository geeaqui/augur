import { ComponentFactory } from '../linker/component_factory';
import { NgModuleFactory } from '../linker/ng_module_factory';
import { Type } from '../type';
import { NgModuleDefinitionFactory, ProviderOverride } from './types';
export declare function overrideProvider(override: ProviderOverride): void;
export declare function overrideComponentView(comp: Type<any>, componentFactory: ComponentFactory<any>): void;
export declare function clearOverrides(): void;
export declare function createNgModuleFactory(ngModuleType: Type<any>, bootstrapComponents: Type<any>[], defFactory: NgModuleDefinitionFactory): NgModuleFactory<any>;
