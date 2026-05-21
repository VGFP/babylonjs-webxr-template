[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInspectorOptions

# Interface: IInspectorOptions

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L102)

Interface used to define the options to use to create the Inspector

## Properties

### additionalNodes?

> `optional` **additionalNodes?**: [`IExplorerAdditionalNode`](IExplorerAdditionalNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L142)

Optional list of additional top level nodes

***

### contextMenu?

> `optional` **contextMenu?**: `Partial`\<`Record`\<[`IInspectorContextMenuType`](../type-aliases/IInspectorContextMenuType.md), [`IInspectorContextMenuItem`](IInspectorContextMenuItem.md)[]\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L158)

Context menu for inspector tools such as "Post Process", "Nodes", "Materials", etc.

***

### contextMenuOverride?

> `optional` **contextMenuOverride?**: [`IInspectorContextMenuType`](../type-aliases/IInspectorContextMenuType.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L162)

List of context menu items that should be completely overridden by custom items from the contextMenu property.

***

### embedMode?

> `optional` **embedMode?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L122)

Display in embed mode (both panes on the right)

***

### enableClose?

> `optional` **enableClose?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L134)

Allow the panes to be closed by users (default: true)

***

### enablePopup?

> `optional` **enablePopup?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L130)

Allow the panes to popup (default: true)

***

### explorerExtensibility?

> `optional` **explorerExtensibility?**: [`IExplorerExtensibilityGroup`](IExplorerExtensibilityGroup.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L138)

Optional list of extensibility entries

***

### gizmoCamera?

> `optional` **gizmoCamera?**: [`Camera`](../classes/Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L154)

Optional camera to use to render the gizmos from the inspector (default to the scene.activeCamera or the latest from scene.activeCameras)

***

### globalRoot?

> `optional` **globalRoot?**: `HTMLElement`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L110)

HTML element to use as root (the parent of the rendering canvas will be used as default value)

***

### handleResize?

> `optional` **handleResize?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L126)

let the Inspector handles resize of the canvas when panes are resized (default to true)

***

### initialTab?

> `optional` **initialTab?**: [`DebugLayerTab`](../enumerations/DebugLayerTab.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L150)

Optional initial tab (default to DebugLayerTab.Properties)

***

### inspectorURL?

> `optional` **inspectorURL?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L146)

Optional URL to get the inspector script from (by default it uses the babylonjs CDN).

***

### overlay?

> `optional` **overlay?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L106)

Display in overlay mode (default: false)

***

### showExplorer?

> `optional` **showExplorer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L114)

Display the Scene explorer

***

### showInspector?

> `optional` **showInspector?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L118)

Display the property inspector

***

### skipDefaultFontLoading?

> `optional` **skipDefaultFontLoading?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L167)

Should the default font loading be skipped
