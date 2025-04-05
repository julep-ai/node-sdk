# Changelog

## 1.71.5 (2025-04-05)

Full Changelog: [v1.71.4...v1.71.5](https://github.com/julep-ai/node-sdk/compare/v1.71.4...v1.71.5)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#286](https://github.com/julep-ai/node-sdk/issues/286)) ([42e26a9](https://github.com/julep-ai/node-sdk/commit/42e26a9e18a2a53c69308694ef391f2bb192af86))


### Chores

* **internal:** codegen related update ([#285](https://github.com/julep-ai/node-sdk/issues/285)) ([260f2c5](https://github.com/julep-ai/node-sdk/commit/260f2c5ce25aa2f49375255aea814ab08279f4f6))
* **internal:** improve index signature formatting ([#283](https://github.com/julep-ai/node-sdk/issues/283)) ([63900c6](https://github.com/julep-ai/node-sdk/commit/63900c6c079568def787b2f54002124a41db71c4))

## 1.71.4 (2025-04-04)

Full Changelog: [v1.71.3...v1.71.4](https://github.com/julep-ai/node-sdk/compare/v1.71.3...v1.71.4)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#281](https://github.com/julep-ai/node-sdk/issues/281)) ([00cd1ad](https://github.com/julep-ai/node-sdk/commit/00cd1ad472f29d54813f7ebbaf628206b8aa61d8))


### Chores

* **internal:** add aliases for Record and Array ([#279](https://github.com/julep-ai/node-sdk/issues/279)) ([9d00a78](https://github.com/julep-ai/node-sdk/commit/9d00a7818d006fdbeec350edf7ea44ba75e81a95))

## 1.71.3 (2025-04-03)

Full Changelog: [v1.71.2...v1.71.3](https://github.com/julep-ai/node-sdk/compare/v1.71.2...v1.71.3)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#276](https://github.com/julep-ai/node-sdk/issues/276)) ([2109c3f](https://github.com/julep-ai/node-sdk/commit/2109c3f4e4e7db57996bd71e9f1be2bd95bf45c6))

## 1.71.2 (2025-03-28)

Full Changelog: [v1.71.1...v1.71.2](https://github.com/julep-ai/node-sdk/compare/v1.71.1...v1.71.2)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#273](https://github.com/julep-ai/node-sdk/issues/273)) ([51c0345](https://github.com/julep-ai/node-sdk/commit/51c0345e8e6d7cdd49f66ab80986a512be2eb9d9))

## 1.71.1 (2025-03-22)

Full Changelog: [v1.71.0...v1.71.1](https://github.com/julep-ai/node-sdk/compare/v1.71.0...v1.71.1)

### Bug Fixes

* avoid type error in certain environments ([#270](https://github.com/julep-ai/node-sdk/issues/270)) ([ddc6820](https://github.com/julep-ai/node-sdk/commit/ddc6820cf528aa035b552f47ca644a50b16f1324))

## 1.71.0 (2025-03-20)

Full Changelog: [v1.70.0...v1.71.0](https://github.com/julep-ai/node-sdk/compare/v1.70.0...v1.71.0)

### Features

* **api:** api update ([#268](https://github.com/julep-ai/node-sdk/issues/268)) ([bd22a0e](https://github.com/julep-ai/node-sdk/commit/bd22a0ee0228b2c2b4457fcc0bf15d76d8f69b06))


### Chores

* **exports:** cleaner resource index imports ([#265](https://github.com/julep-ai/node-sdk/issues/265)) ([296a3bd](https://github.com/julep-ai/node-sdk/commit/296a3bdb3bb2a1c752f4fe20183aac4629714b88))
* **exports:** stop using path fallbacks ([#267](https://github.com/julep-ai/node-sdk/issues/267)) ([4102eb1](https://github.com/julep-ai/node-sdk/commit/4102eb18f9b500c811f0950c63e8fce5ba18a23f))

## 1.70.0 (2025-03-18)

Full Changelog: [v1.69.0...v1.70.0](https://github.com/julep-ai/node-sdk/compare/v1.69.0...v1.70.0)

### Features

* **api:** api update ([#262](https://github.com/julep-ai/node-sdk/issues/262)) ([a4f1214](https://github.com/julep-ai/node-sdk/commit/a4f1214bd59f094a0565733332363e40c7a8c5fd))

## 1.69.0 (2025-03-14)

Full Changelog: [v1.68.1...v1.69.0](https://github.com/julep-ai/node-sdk/compare/v1.68.1...v1.69.0)

### Features

* **api:** api update ([#259](https://github.com/julep-ai/node-sdk/issues/259)) ([dbdd111](https://github.com/julep-ai/node-sdk/commit/dbdd111cbbc87735c70dd203bfd1ef14752cee00))

## 1.68.1 (2025-03-14)

Full Changelog: [v1.68.0...v1.68.1](https://github.com/julep-ai/node-sdk/compare/v1.68.0...v1.68.1)

### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#257](https://github.com/julep-ai/node-sdk/issues/257)) ([4bf6ee8](https://github.com/julep-ai/node-sdk/commit/4bf6ee870f1c53ec7e1aeb4fd0f8915fbe369535))


### Chores

* **internal:** remove extra empty newlines ([#255](https://github.com/julep-ai/node-sdk/issues/255)) ([007bc8e](https://github.com/julep-ai/node-sdk/commit/007bc8e0c0b9819fe642d6c212f4f3966b9a33d4))

## 1.68.0 (2025-03-13)

Full Changelog: [v1.67.0...v1.68.0](https://github.com/julep-ai/node-sdk/compare/v1.67.0...v1.68.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#250](https://github.com/julep-ai/node-sdk/issues/250)) ([6a07859](https://github.com/julep-ai/node-sdk/commit/6a07859516e664108bc86e8aecaeabffe76dafbf))
* **api:** api update ([#253](https://github.com/julep-ai/node-sdk/issues/253)) ([9f98aae](https://github.com/julep-ai/node-sdk/commit/9f98aae5dc54af3750ccd925ca581d0071b6d0e1))


### Chores

* **internal:** codegen related update ([#252](https://github.com/julep-ai/node-sdk/issues/252)) ([99ea6df](https://github.com/julep-ai/node-sdk/commit/99ea6dff97fbde935c7e658fbb0fb7c90bb443b8))

## 1.67.0 (2025-03-03)

Full Changelog: [v1.66.0...v1.67.0](https://github.com/julep-ai/node-sdk/compare/v1.66.0...v1.67.0)

### Features

* **api:** api update ([#247](https://github.com/julep-ai/node-sdk/issues/247)) ([221da66](https://github.com/julep-ai/node-sdk/commit/221da664bc2da9690d4062fae1eae0c6c5f859e4))

## 1.66.0 (2025-03-01)

Full Changelog: [v1.65.0...v1.66.0](https://github.com/julep-ai/node-sdk/compare/v1.65.0...v1.66.0)

### Features

* **api:** manual updates ([#244](https://github.com/julep-ai/node-sdk/issues/244)) ([1580238](https://github.com/julep-ai/node-sdk/commit/158023849b667027a25d989271052578e4b3b174))

## 1.65.0 (2025-03-01)

Full Changelog: [v1.64.0...v1.65.0](https://github.com/julep-ai/node-sdk/compare/v1.64.0...v1.65.0)

### Features

* **api:** api update ([#241](https://github.com/julep-ai/node-sdk/issues/241)) ([17f9eee](https://github.com/julep-ai/node-sdk/commit/17f9eee8ec0f08a2f28deeeed5f2f78180ffeebe))

## 1.64.0 (2025-02-28)

Full Changelog: [v1.63.0...v1.64.0](https://github.com/julep-ai/node-sdk/compare/v1.63.0...v1.64.0)

### Features

* **api:** api update ([#238](https://github.com/julep-ai/node-sdk/issues/238)) ([8136cc2](https://github.com/julep-ai/node-sdk/commit/8136cc2da9013ba1385f8e9d9760f8da816e8031))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#237](https://github.com/julep-ai/node-sdk/issues/237)) ([6386bf2](https://github.com/julep-ai/node-sdk/commit/6386bf2f8df976aff1e546b063ef8f127ca25642))

## 1.63.0 (2025-02-27)

Full Changelog: [v1.62.0...v1.63.0](https://github.com/julep-ai/node-sdk/compare/v1.62.0...v1.63.0)

### Features

* **api:** api update ([#234](https://github.com/julep-ai/node-sdk/issues/234)) ([49286e6](https://github.com/julep-ai/node-sdk/commit/49286e6aaeb6168bde5fb168371828f7917553df))

## 1.62.0 (2025-02-27)

Full Changelog: [v1.61.0...v1.62.0](https://github.com/julep-ai/node-sdk/compare/v1.61.0...v1.62.0)

### Features

* **api:** api update ([#231](https://github.com/julep-ai/node-sdk/issues/231)) ([b04bd91](https://github.com/julep-ai/node-sdk/commit/b04bd9104d19968d4ec6381d8ba5bf2190e62894))

## 1.61.0 (2025-02-25)

Full Changelog: [v1.60.0...v1.61.0](https://github.com/julep-ai/node-sdk/compare/v1.60.0...v1.61.0)

### Features

* **api:** api update ([#227](https://github.com/julep-ai/node-sdk/issues/227)) ([1450591](https://github.com/julep-ai/node-sdk/commit/1450591e5270e902bfa0d9f726d5be0f9c01d440))
* **api:** api update ([#228](https://github.com/julep-ai/node-sdk/issues/228)) ([80734e2](https://github.com/julep-ai/node-sdk/commit/80734e2b68ac80c1e9975ece225418653737b41d))

## 1.60.0 (2025-02-24)

Full Changelog: [v1.59.0...v1.60.0](https://github.com/julep-ai/node-sdk/compare/v1.59.0...v1.60.0)

### Features

* **api:** api update ([#224](https://github.com/julep-ai/node-sdk/issues/224)) ([261a9af](https://github.com/julep-ai/node-sdk/commit/261a9aff164501dc350bbdb1cb975da2bed16586))

## 1.59.0 (2025-02-24)

Full Changelog: [v1.58.0...v1.59.0](https://github.com/julep-ai/node-sdk/compare/v1.58.0...v1.59.0)

### Features

* **api:** api update ([#222](https://github.com/julep-ai/node-sdk/issues/222)) ([41e7484](https://github.com/julep-ai/node-sdk/commit/41e748442121cdd2bcc54ee8e24de5c00dbd11b8))


### Chores

* **internal:** fix devcontainers setup ([#220](https://github.com/julep-ai/node-sdk/issues/220)) ([b56beab](https://github.com/julep-ai/node-sdk/commit/b56beab5f0d9731cf14586834ae84acd09fce2c2))

## 1.58.0 (2025-02-18)

Full Changelog: [v1.57.0...v1.58.0](https://github.com/julep-ai/node-sdk/compare/v1.57.0...v1.58.0)

### Features

* **api:** api update ([#217](https://github.com/julep-ai/node-sdk/issues/217)) ([6fc5c6a](https://github.com/julep-ai/node-sdk/commit/6fc5c6a2008e9f510b1707befda58f2716f32f50))

## 1.57.0 (2025-02-17)

Full Changelog: [v1.56.1...v1.57.0](https://github.com/julep-ai/node-sdk/compare/v1.56.1...v1.57.0)

### Features

* **api:** api update ([#214](https://github.com/julep-ai/node-sdk/issues/214)) ([6a0fe75](https://github.com/julep-ai/node-sdk/commit/6a0fe7513600c2e8e3e204afae3eb9ec259888fd))

## 1.56.1 (2025-02-14)

Full Changelog: [v1.56.0...v1.56.1](https://github.com/julep-ai/node-sdk/compare/v1.56.0...v1.56.1)

### Bug Fixes

* **client:** fix export map for index exports ([#211](https://github.com/julep-ai/node-sdk/issues/211)) ([66b07f3](https://github.com/julep-ai/node-sdk/commit/66b07f3bf4b4012621216b2f3bc9c43b64d5978b))

## 1.56.0 (2025-02-05)

Full Changelog: [v1.55.0...v1.56.0](https://github.com/julep-ai/node-sdk/compare/v1.55.0...v1.56.0)

### Features

* **api:** api update ([#209](https://github.com/julep-ai/node-sdk/issues/209)) ([5064479](https://github.com/julep-ai/node-sdk/commit/506447994ffd701b081b906727022ee4e8f4615b))
* **client:** send `X-Stainless-Timeout` header ([#207](https://github.com/julep-ai/node-sdk/issues/207)) ([fd576e1](https://github.com/julep-ai/node-sdk/commit/fd576e1b819c220a7965ab815bb668d904df5ba0))

## 1.55.0 (2025-02-03)

Full Changelog: [v1.54.0...v1.55.0](https://github.com/julep-ai/node-sdk/compare/v1.54.0...v1.55.0)

### Features

* **api:** api update ([#204](https://github.com/julep-ai/node-sdk/issues/204)) ([b1e3b0a](https://github.com/julep-ai/node-sdk/commit/b1e3b0ace8e26251eb17072b4d64959fef0db01d))

## 1.54.0 (2025-01-28)

Full Changelog: [v1.53.0...v1.54.0](https://github.com/julep-ai/node-sdk/compare/v1.53.0...v1.54.0)

### Features

* **api:** api update ([#201](https://github.com/julep-ai/node-sdk/issues/201)) ([04a574b](https://github.com/julep-ai/node-sdk/commit/04a574b625a741ce3abb92035fc198ef25b7d83c))

## 1.53.0 (2025-01-27)

Full Changelog: [v1.52.0...v1.53.0](https://github.com/julep-ai/node-sdk/compare/v1.52.0...v1.53.0)

### Features

* **api:** api update ([#199](https://github.com/julep-ai/node-sdk/issues/199)) ([c580c9b](https://github.com/julep-ai/node-sdk/commit/c580c9bd2d3b93ff350ca7904e4faa1c8be0b69e))


### Chores

* **internal:** codegen related update ([#197](https://github.com/julep-ai/node-sdk/issues/197)) ([6241ae3](https://github.com/julep-ai/node-sdk/commit/6241ae359bf702e6aeaf76d5556a1ee68a837402))

## 1.52.0 (2025-01-22)

Full Changelog: [v1.51.0...v1.52.0](https://github.com/julep-ai/node-sdk/compare/v1.51.0...v1.52.0)

### Features

* **api:** api update ([#195](https://github.com/julep-ai/node-sdk/issues/195)) ([00ca355](https://github.com/julep-ai/node-sdk/commit/00ca35549f271477cb3b8bc1b5aef3d6f4650f2d))


### Chores

* **internal:** codegen related update ([#193](https://github.com/julep-ai/node-sdk/issues/193)) ([8d06362](https://github.com/julep-ai/node-sdk/commit/8d0636220ac2eab302191099cbc28d856f8f6562))

## 1.51.0 (2025-01-16)

Full Changelog: [v1.50.0...v1.51.0](https://github.com/julep-ai/node-sdk/compare/v1.50.0...v1.51.0)

### Features

* **api:** api update ([#190](https://github.com/julep-ai/node-sdk/issues/190)) ([c25ad71](https://github.com/julep-ai/node-sdk/commit/c25ad7149b4b3f96ae147ba2b3f05989189fe849))

## 1.50.0 (2025-01-16)

Full Changelog: [v1.49.0...v1.50.0](https://github.com/julep-ai/node-sdk/compare/v1.49.0...v1.50.0)

### Features

* **api:** api update ([#187](https://github.com/julep-ai/node-sdk/issues/187)) ([31ba569](https://github.com/julep-ai/node-sdk/commit/31ba56985819c5136ad42baf5b79dd79daf63136))
* **api:** Switch default environment to production ([#185](https://github.com/julep-ai/node-sdk/issues/185)) ([55cb8e2](https://github.com/julep-ai/node-sdk/commit/55cb8e2f953fb1e78d784fc8499ef50a07f7f484))
* **api:** Switch default environment to production ([#188](https://github.com/julep-ai/node-sdk/issues/188)) ([b0e61fa](https://github.com/julep-ai/node-sdk/commit/b0e61fa55e69e773fda8418cd3bc74330d3bd1f4))

## 1.49.0 (2025-01-14)

Full Changelog: [v1.48.0...v1.49.0](https://github.com/julep-ai/node-sdk/compare/v1.48.0...v1.49.0)

### Features

* **api:** put/patch methods swap ([#182](https://github.com/julep-ai/node-sdk/issues/182)) ([8dbcbb2](https://github.com/julep-ai/node-sdk/commit/8dbcbb2069b2d9cbee466f00e6e18a8e4e2e8fd7))

## 1.48.0 (2025-01-13)

Full Changelog: [v1.47.0...v1.48.0](https://github.com/julep-ai/node-sdk/compare/v1.47.0...v1.48.0)

### Features

* **api:** api update ([#179](https://github.com/julep-ai/node-sdk/issues/179)) ([dda5534](https://github.com/julep-ai/node-sdk/commit/dda55342596144add0871bcc324f73d780416512))

## 1.47.0 (2025-01-11)

Full Changelog: [v1.46.0...v1.47.0](https://github.com/julep-ai/node-sdk/compare/v1.46.0...v1.47.0)

### Features

* **api:** api update ([#177](https://github.com/julep-ai/node-sdk/issues/177)) ([ceb6766](https://github.com/julep-ai/node-sdk/commit/ceb6766b5466f30bc8a6206666a04d2a4a893d22))


### Chores

* **internal:** codegen related update ([#175](https://github.com/julep-ai/node-sdk/issues/175)) ([fb57c6c](https://github.com/julep-ai/node-sdk/commit/fb57c6c7bd7d77fd09ee95fe26d754469fd71f27))

## 1.46.0 (2025-01-10)

Full Changelog: [v1.45.0...v1.46.0](https://github.com/julep-ai/node-sdk/compare/v1.45.0...v1.46.0)

### Features

* **api:** api update ([#173](https://github.com/julep-ai/node-sdk/issues/173)) ([3e761ff](https://github.com/julep-ai/node-sdk/commit/3e761ff9dcfb18ce18e36d57b2e2d741a38f5d2d))


### Chores

* **client:** simplify `unknown | null` to just `unknown` ([#171](https://github.com/julep-ai/node-sdk/issues/171)) ([f6b9d12](https://github.com/julep-ai/node-sdk/commit/f6b9d1248ecdaa5259e2e4487d7a7eb9a0292e9a))

## 1.45.0 (2025-01-05)

Full Changelog: [v1.44.0...v1.45.0](https://github.com/julep-ai/node-sdk/compare/v1.44.0...v1.45.0)

### Features

* **api:** api update ([#168](https://github.com/julep-ai/node-sdk/issues/168)) ([b645a5b](https://github.com/julep-ai/node-sdk/commit/b645a5b83bcdb5b5e3a40984898fcf163aa1cad2))

## 1.44.0 (2025-01-05)

Full Changelog: [v1.43.2...v1.44.0](https://github.com/julep-ai/node-sdk/compare/v1.43.2...v1.44.0)

### Features

* **api:** api update ([#166](https://github.com/julep-ai/node-sdk/issues/166)) ([a8bb1c2](https://github.com/julep-ai/node-sdk/commit/a8bb1c21c122db1c0ab3c217056d6a7fdc82e8b1))


### Chores

* **internal:** codegen related update ([#163](https://github.com/julep-ai/node-sdk/issues/163)) ([73e31fb](https://github.com/julep-ai/node-sdk/commit/73e31fb7c34333207bc626db4e9af7fdce4cadc2))
* **internal:** codegen related update ([#165](https://github.com/julep-ai/node-sdk/issues/165)) ([e8510d5](https://github.com/julep-ai/node-sdk/commit/e8510d5ae2b8c84311462dc6f3e213daa12358da))

## 1.43.2 (2024-12-24)

Full Changelog: [v1.43.1...v1.43.2](https://github.com/julep-ai/node-sdk/compare/v1.43.1...v1.43.2)

### Bug Fixes

* **client:** normalize method ([#161](https://github.com/julep-ai/node-sdk/issues/161)) ([05348d3](https://github.com/julep-ai/node-sdk/commit/05348d335dd16e281ce3aec8a1b66f778ee3c0d9))


### Chores

* **internal:** codegen related update ([#155](https://github.com/julep-ai/node-sdk/issues/155)) ([b91e53a](https://github.com/julep-ai/node-sdk/commit/b91e53aa9c391952eeb9738415e138ae5cb81438))
* **internal:** codegen related update ([#157](https://github.com/julep-ai/node-sdk/issues/157)) ([63e2be2](https://github.com/julep-ai/node-sdk/commit/63e2be272456056c645e5dcfe3a52b7fec01e8d4))
* **internal:** codegen related update ([#158](https://github.com/julep-ai/node-sdk/issues/158)) ([90200da](https://github.com/julep-ai/node-sdk/commit/90200da556ba611a9e4004aaf661d099d0056b6c))
* **internal:** codegen related update ([#159](https://github.com/julep-ai/node-sdk/issues/159)) ([8cf8f24](https://github.com/julep-ai/node-sdk/commit/8cf8f24f7cad704c9b761731cb5e0e7a2927b9ea))
* **internal:** codegen related update ([#160](https://github.com/julep-ai/node-sdk/issues/160)) ([7795138](https://github.com/julep-ai/node-sdk/commit/779513832d5a69e4671114707d7b7c9e5dd73834))

## 1.43.1 (2024-12-20)

Full Changelog: [v1.43.0...v1.43.1](https://github.com/julep-ai/node-sdk/compare/v1.43.0...v1.43.1)

### Chores

* **internal:** codegen related update ([#149](https://github.com/julep-ai/node-sdk/issues/149)) ([b5264e1](https://github.com/julep-ai/node-sdk/commit/b5264e18ee49d156ae74697603414371c07fa64d))
* **internal:** codegen related update ([#151](https://github.com/julep-ai/node-sdk/issues/151)) ([9d0c22a](https://github.com/julep-ai/node-sdk/commit/9d0c22aa7f8b7906eea52f5048bbb67d8f76e8dd))
* **internal:** codegen related update ([#152](https://github.com/julep-ai/node-sdk/issues/152)) ([cd7f7a6](https://github.com/julep-ai/node-sdk/commit/cd7f7a6aebe67726849a0fe2a35e3fa82c07cbde))
* **internal:** codegen related update ([#153](https://github.com/julep-ai/node-sdk/issues/153)) ([37e59ec](https://github.com/julep-ai/node-sdk/commit/37e59ec7dcf17217dd61f5abd150ecccc13831f0))

## 1.43.0 (2024-12-13)

Full Changelog: [v1.42.0...v1.43.0](https://github.com/julep-ai/node-sdk/compare/v1.42.0...v1.43.0)

### Features

* **api:** api update ([#147](https://github.com/julep-ai/node-sdk/issues/147)) ([d22796b](https://github.com/julep-ai/node-sdk/commit/d22796b866091d462b5dc17cdd2cbf602a8f8c64))


### Chores

* **internal:** codegen related update ([#145](https://github.com/julep-ai/node-sdk/issues/145)) ([78823a9](https://github.com/julep-ai/node-sdk/commit/78823a9ffc2497e6ca43d278535b085928ee0e8d))

## 1.42.0 (2024-12-07)

Full Changelog: [v1.41.0...v1.42.0](https://github.com/julep-ai/node-sdk/compare/v1.41.0...v1.42.0)

### Features

* **api:** api update ([#142](https://github.com/julep-ai/node-sdk/issues/142)) ([6da2a52](https://github.com/julep-ai/node-sdk/commit/6da2a526d5a62310d2ced6b09f0baa6ee7c34d0f))

## 1.41.0 (2024-12-03)

Full Changelog: [v1.40.0...v1.41.0](https://github.com/julep-ai/node-sdk/compare/v1.40.0...v1.41.0)

### Features

* **api:** api update ([#139](https://github.com/julep-ai/node-sdk/issues/139)) ([5016ec4](https://github.com/julep-ai/node-sdk/commit/5016ec4f4d249656b94f8b61b1c3374117d43417))

## 1.40.0 (2024-11-22)

Full Changelog: [v1.39.0...v1.40.0](https://github.com/julep-ai/node-sdk/compare/v1.39.0...v1.40.0)

### Features

* **api:** add files endpoints ([#136](https://github.com/julep-ai/node-sdk/issues/136)) ([a804f5d](https://github.com/julep-ai/node-sdk/commit/a804f5d08fa62811dff5cdc16af273c5e74fe468))

## 1.39.0 (2024-11-20)

Full Changelog: [v1.38.0...v1.39.0](https://github.com/julep-ai/node-sdk/compare/v1.38.0...v1.39.0)

### Features

* **api:** api update ([#134](https://github.com/julep-ai/node-sdk/issues/134)) ([0b34041](https://github.com/julep-ai/node-sdk/commit/0b340411112cc23e68a0acc309fc3fa5c614524b))


### Chores

* rebuild project due to codegen change ([#130](https://github.com/julep-ai/node-sdk/issues/130)) ([6750ae5](https://github.com/julep-ai/node-sdk/commit/6750ae5f888b9f1ec04bf715c5c479828f36013e))
* remove redundant word in comment ([#133](https://github.com/julep-ai/node-sdk/issues/133)) ([11c1575](https://github.com/julep-ai/node-sdk/commit/11c15751e1393c0a58b58adaf9df851fc3dd16ce))


### Documentation

* remove suggestion to use `npm` call out ([#132](https://github.com/julep-ai/node-sdk/issues/132)) ([87101a1](https://github.com/julep-ai/node-sdk/commit/87101a1af69d2f64df2dcd2828bfbb825f362254))

## 1.38.0 (2024-11-16)

Full Changelog: [v1.37.0...v1.38.0](https://github.com/julep-ai/node-sdk/compare/v1.37.0...v1.38.0)

### Features

* **api:** increase retries ([#128](https://github.com/julep-ai/node-sdk/issues/128)) ([ed10072](https://github.com/julep-ai/node-sdk/commit/ed100722f8cc1033d1d81e7360986985e202dd37))

## 1.37.0 (2024-11-15)

Full Changelog: [v1.36.0...v1.37.0](https://github.com/julep-ai/node-sdk/compare/v1.36.0...v1.37.0)

### Features

* **api:** api update ([#124](https://github.com/julep-ai/node-sdk/issues/124)) ([56f6b47](https://github.com/julep-ai/node-sdk/commit/56f6b473fde55e2b2f1243fdee587661280d6a19))


### Chores

* rebuild project due to codegen change ([#126](https://github.com/julep-ai/node-sdk/issues/126)) ([11ad5ed](https://github.com/julep-ai/node-sdk/commit/11ad5edb15a54f10db5ad3a3c330bb66b043b938))

## 1.36.0 (2024-11-12)

Full Changelog: [v1.35.0...v1.36.0](https://github.com/julep-ai/node-sdk/compare/v1.35.0...v1.36.0)

### Features

* **api:** api update ([#122](https://github.com/julep-ai/node-sdk/issues/122)) ([4aa31f7](https://github.com/julep-ai/node-sdk/commit/4aa31f766842d652c7418c6d97e905390ddfed06))


### Chores

* rebuild project due to codegen change ([#120](https://github.com/julep-ai/node-sdk/issues/120)) ([7cf8938](https://github.com/julep-ai/node-sdk/commit/7cf893874a5a27cb3ee2b599f735adbdfed4f552))

## 1.35.0 (2024-11-11)

Full Changelog: [v1.34.0...v1.35.0](https://github.com/julep-ai/node-sdk/compare/v1.34.0...v1.35.0)

### Features

* **api:** api update ([#117](https://github.com/julep-ai/node-sdk/issues/117)) ([70e1907](https://github.com/julep-ai/node-sdk/commit/70e19072ecd4475998e419b658cffff8768f9f1e))

## 1.34.0 (2024-11-10)

Full Changelog: [v1.33.0...v1.34.0](https://github.com/julep-ai/node-sdk/compare/v1.33.0...v1.34.0)

### Features

* **api:** api update ([#114](https://github.com/julep-ai/node-sdk/issues/114)) ([95d5c13](https://github.com/julep-ai/node-sdk/commit/95d5c13dcf004e2436bdd622a366e69ac3e18b10))

## 1.33.0 (2024-11-09)

Full Changelog: [v1.32.0...v1.33.0](https://github.com/julep-ai/node-sdk/compare/v1.32.0...v1.33.0)

### Features

* **api:** api update ([#111](https://github.com/julep-ai/node-sdk/issues/111)) ([65534ac](https://github.com/julep-ai/node-sdk/commit/65534acb1fd7f75c3a445e5acd05d2917c34ba2e))

## 1.32.0 (2024-11-09)

Full Changelog: [v1.31.0...v1.32.0](https://github.com/julep-ai/node-sdk/compare/v1.31.0...v1.32.0)

### Features

* **api:** api update ([#108](https://github.com/julep-ai/node-sdk/issues/108)) ([71716aa](https://github.com/julep-ai/node-sdk/commit/71716aac7a0d2ff2b041f2e21c1d8b2691301ae8))

## 1.31.0 (2024-11-04)

Full Changelog: [v1.30.0...v1.31.0](https://github.com/julep-ai/node-sdk/compare/v1.30.0...v1.31.0)

### Features

* **api:** api update ([#105](https://github.com/julep-ai/node-sdk/issues/105)) ([d3884d4](https://github.com/julep-ai/node-sdk/commit/d3884d43bebe23c953b1f94a62e2b46b1378dfab))

## 1.30.0 (2024-11-02)

Full Changelog: [v1.29.0...v1.30.0](https://github.com/julep-ai/node-sdk/compare/v1.29.0...v1.30.0)

### Features

* **api:** manual updates ([#102](https://github.com/julep-ai/node-sdk/issues/102)) ([633bbdf](https://github.com/julep-ai/node-sdk/commit/633bbdf70cbba342e6e3df85688681a920c07c78))

## 1.29.0 (2024-11-02)

Full Changelog: [v1.28.0...v1.29.0](https://github.com/julep-ai/node-sdk/compare/v1.28.0...v1.29.0)

### Features

* **api:** api update ([#99](https://github.com/julep-ai/node-sdk/issues/99)) ([32d39f9](https://github.com/julep-ai/node-sdk/commit/32d39f992bf82742db05fa3446a5d02d5d4195fe))

## 1.28.0 (2024-11-01)

Full Changelog: [v1.27.0...v1.28.0](https://github.com/julep-ai/node-sdk/compare/v1.27.0...v1.28.0)

### Features

* **api:** api update ([#96](https://github.com/julep-ai/node-sdk/issues/96)) ([b04375c](https://github.com/julep-ai/node-sdk/commit/b04375c968dd5878e4adb26d0cb6e78e6fba511c))

## 1.27.0 (2024-11-01)

Full Changelog: [v1.26.0...v1.27.0](https://github.com/julep-ai/node-sdk/compare/v1.26.0...v1.27.0)

### Features

* **api:** api update ([#93](https://github.com/julep-ai/node-sdk/issues/93)) ([b32e77a](https://github.com/julep-ai/node-sdk/commit/b32e77a46811d44e14df0bea331ef5ca254b4be1))

## 1.26.0 (2024-10-31)

Full Changelog: [v1.25.0...v1.26.0](https://github.com/julep-ai/node-sdk/compare/v1.25.0...v1.26.0)

### Features

* **api:** api update ([#90](https://github.com/julep-ai/node-sdk/issues/90)) ([9155af0](https://github.com/julep-ai/node-sdk/commit/9155af06118d80c8e61af3911d3d4a4785e65e5e))

## 1.25.0 (2024-10-31)

Full Changelog: [v1.24.0...v1.25.0](https://github.com/julep-ai/node-sdk/compare/v1.24.0...v1.25.0)

### Features

* **api:** api update ([#87](https://github.com/julep-ai/node-sdk/issues/87)) ([ac6dfe7](https://github.com/julep-ai/node-sdk/commit/ac6dfe77e2ff5e8ad2dbae91da318bee9515231d))

## 1.24.0 (2024-10-30)

Full Changelog: [v1.23.0...v1.24.0](https://github.com/julep-ai/node-sdk/compare/v1.23.0...v1.24.0)

### Features

* **api:** api update ([#84](https://github.com/julep-ai/node-sdk/issues/84)) ([449a5d2](https://github.com/julep-ai/node-sdk/commit/449a5d258f26bcd32a6d8e2acc980c06a97d8799))

## 1.23.0 (2024-10-30)

Full Changelog: [v1.22.0...v1.23.0](https://github.com/julep-ai/node-sdk/compare/v1.22.0...v1.23.0)

### Features

* **api:** api update ([#80](https://github.com/julep-ai/node-sdk/issues/80)) ([be2c148](https://github.com/julep-ai/node-sdk/commit/be2c148cdf31444147308981ae4f760b998832d5))
* **api:** api update ([#82](https://github.com/julep-ai/node-sdk/issues/82)) ([4997d94](https://github.com/julep-ai/node-sdk/commit/4997d943c0d26d24641095b732f0cbf650bbb803))

## 1.22.0 (2024-10-29)

Full Changelog: [v1.21.0...v1.22.0](https://github.com/julep-ai/node-sdk/compare/v1.21.0...v1.22.0)

### Features

* **api:** api update ([#77](https://github.com/julep-ai/node-sdk/issues/77)) ([da4f8cc](https://github.com/julep-ai/node-sdk/commit/da4f8cc62f833b22b4f7d1f21be4a5a370093bcf))

## 1.21.0 (2024-10-29)

Full Changelog: [v1.20.0...v1.21.0](https://github.com/julep-ai/node-sdk/compare/v1.20.0...v1.21.0)

### Features

* **api:** api update ([#74](https://github.com/julep-ai/node-sdk/issues/74)) ([fe47374](https://github.com/julep-ai/node-sdk/commit/fe47374b8db478d1bc2c68c7ed42746cc2b17eba))

## 1.20.0 (2024-10-26)

Full Changelog: [v1.19.0...v1.20.0](https://github.com/julep-ai/node-sdk/compare/v1.19.0...v1.20.0)

### Features

* **api:** api update ([#71](https://github.com/julep-ai/node-sdk/issues/71)) ([1c9eab2](https://github.com/julep-ai/node-sdk/commit/1c9eab23c456ec36ade255853d74a008dbce57bf))

## 1.19.0 (2024-10-22)

Full Changelog: [v1.18.0...v1.19.0](https://github.com/julep-ai/node-sdk/compare/v1.18.0...v1.19.0)

### Features

* **api:** api update ([#68](https://github.com/julep-ai/node-sdk/issues/68)) ([64f6e26](https://github.com/julep-ai/node-sdk/commit/64f6e265685c1833231a6bc1492c703b665af12a))

## 1.18.0 (2024-10-19)

Full Changelog: [v1.17.0...v1.18.0](https://github.com/julep-ai/node-sdk/compare/v1.17.0...v1.18.0)

### Features

* **api:** api update ([#65](https://github.com/julep-ai/node-sdk/issues/65)) ([2463b5f](https://github.com/julep-ai/node-sdk/commit/2463b5fa7e3e7d89ebbfdfa189fa6639487938b9))

## 1.17.0 (2024-10-18)

Full Changelog: [v1.16.0...v1.17.0](https://github.com/julep-ai/node-sdk/compare/v1.16.0...v1.17.0)

### Features

* deps: Add dotenv as a bundled dep ([0b37732](https://github.com/julep-ai/node-sdk/commit/0b37732d71a54b8d52cddeb7750e9a0fb91a672b))

## 1.16.0 (2024-10-18)

Full Changelog: [v1.15.0...v1.16.0](https://github.com/julep-ai/node-sdk/compare/v1.15.0...v1.16.0)

### Features

* **api:** api update ([#61](https://github.com/julep-ai/node-sdk/issues/61)) ([069f28a](https://github.com/julep-ai/node-sdk/commit/069f28a7f96b4c094d7edd3ac9cc96b02311e4c9))

## 1.15.0 (2024-10-10)

Full Changelog: [v1.14.0...v1.15.0](https://github.com/julep-ai/node-sdk/compare/v1.14.0...v1.15.0)

### Features

* **api:** api update ([#57](https://github.com/julep-ai/node-sdk/issues/57)) ([6bfba3c](https://github.com/julep-ai/node-sdk/commit/6bfba3c9e763777b7491a0d8cfe3c2950dc64e11))

## 1.14.0 (2024-10-07)

Full Changelog: [v1.13.0...v1.14.0](https://github.com/julep-ai/node-sdk/compare/v1.13.0...v1.14.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#54](https://github.com/julep-ai/node-sdk/issues/54)) ([75c94b3](https://github.com/julep-ai/node-sdk/commit/75c94b3c180341d806a8064f5d90f84456086933))

## 1.13.0 (2024-10-05)

Full Changelog: [v1.12.0...v1.13.0](https://github.com/julep-ai/node-sdk/compare/v1.12.0...v1.13.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#51](https://github.com/julep-ai/node-sdk/issues/51)) ([fd23f99](https://github.com/julep-ai/node-sdk/commit/fd23f99de69394a6a54a9c6ccc6c43da89f72d40))

## 1.12.0 (2024-10-05)

Full Changelog: [v1.11.0...v1.12.0](https://github.com/julep-ai/node-sdk/compare/v1.11.0...v1.12.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#48](https://github.com/julep-ai/node-sdk/issues/48)) ([a9c6f48](https://github.com/julep-ai/node-sdk/commit/a9c6f486bb9de768f109f6f35f86325127224206))

## 1.11.0 (2024-10-05)

Full Changelog: [v1.10.0...v1.11.0](https://github.com/julep-ai/node-sdk/compare/v1.10.0...v1.11.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#45](https://github.com/julep-ai/node-sdk/issues/45)) ([4d7461c](https://github.com/julep-ai/node-sdk/commit/4d7461cde2a7a908f6fe41476eb467fc0d469ca8))

## 1.10.0 (2024-10-04)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/julep-ai/node-sdk/compare/v1.9.0...v1.10.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#42](https://github.com/julep-ai/node-sdk/issues/42)) ([61f2715](https://github.com/julep-ai/node-sdk/commit/61f2715ee2d35d2d1b19c9d75bcdc1ffb5482718))

## 1.9.0 (2024-10-04)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/julep-ai/node-sdk/compare/v1.8.0...v1.9.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#39](https://github.com/julep-ai/node-sdk/issues/39)) ([3e80f74](https://github.com/julep-ai/node-sdk/commit/3e80f7455bcfb6cf21e5e9d981be0b965aceabe6))

## 1.8.0 (2024-10-03)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/julep-ai/node-sdk/compare/v1.7.0...v1.8.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#36](https://github.com/julep-ai/node-sdk/issues/36)) ([d3eb069](https://github.com/julep-ai/node-sdk/commit/d3eb069ced4c6d4fadcaed8bcd7c8d27d292b5b0))

## 1.7.0 (2024-10-02)

Full Changelog: [v1.6.0...v1.7.0](https://github.com/julep-ai/node-sdk/compare/v1.6.0...v1.7.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#34](https://github.com/julep-ai/node-sdk/issues/34)) ([c32e75a](https://github.com/julep-ai/node-sdk/commit/c32e75afa1480399ac118c8f3356c149e8ae737c))


### Chores

* **internal:** codegen related update ([#32](https://github.com/julep-ai/node-sdk/issues/32)) ([a90224b](https://github.com/julep-ai/node-sdk/commit/a90224b6bc5d54d02c8a2f71ff94c5685b1e8f30))

## 1.6.0 (2024-10-01)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/julep-ai/node-sdk/compare/v1.5.0...v1.6.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#29](https://github.com/julep-ai/node-sdk/issues/29)) ([d84e844](https://github.com/julep-ai/node-sdk/commit/d84e8445457609c147a4bb14b060429c1c7ae8b3))

## 1.5.0 (2024-09-25)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/julep-ai/node-sdk/compare/v1.4.0...v1.5.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#26](https://github.com/julep-ai/node-sdk/issues/26)) ([dcccbe0](https://github.com/julep-ai/node-sdk/commit/dcccbe048067ec6cd938ad52c6891033f6448f7c))

## 1.4.0 (2024-09-25)

Full Changelog: [v1.3.1...v1.4.0](https://github.com/julep-ai/node-sdk/compare/v1.3.1...v1.4.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#23](https://github.com/julep-ai/node-sdk/issues/23)) ([2b72885](https://github.com/julep-ai/node-sdk/commit/2b72885c0e5ab2c287d494b982d96677fa57e46e))

## 1.3.1 (2024-09-25)

Full Changelog: [v1.3.0...v1.3.1](https://github.com/julep-ai/node-sdk/compare/v1.3.0...v1.3.1)

### Chores

* **internal:** codegen related update ([#20](https://github.com/julep-ai/node-sdk/issues/20)) ([28ffe4f](https://github.com/julep-ai/node-sdk/commit/28ffe4f56c47e3489fbb394a153084cc69bc0c6c))

## 1.3.0 (2024-09-23)

Full Changelog: [v1.2.1...v1.3.0](https://github.com/julep-ai/node-sdk/compare/v1.2.1...v1.3.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#18](https://github.com/julep-ai/node-sdk/issues/18)) ([cd15af0](https://github.com/julep-ai/node-sdk/commit/cd15af02f95bd82f296b2f050d9fc4659aaa0940))
* **client:** send retry count header ([#17](https://github.com/julep-ai/node-sdk/issues/17)) ([f908edb](https://github.com/julep-ai/node-sdk/commit/f908edb94c57723e77497aa7a6381f26e5b785c5))


### Chores

* **internal:** codegen related update ([#15](https://github.com/julep-ai/node-sdk/issues/15)) ([5c5e049](https://github.com/julep-ai/node-sdk/commit/5c5e04930da23a0ff4f66fab395c6c1e3e42832c))

## 1.2.1 (2024-09-19)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/julep-ai/node-sdk/compare/v1.2.0...v1.2.1)

### Bug Fixes

* **types:** remove leftover polyfill usage ([#13](https://github.com/julep-ai/node-sdk/issues/13)) ([cdc0c13](https://github.com/julep-ai/node-sdk/commit/cdc0c1382ecdf9efa8e2f993a815fbf74ece6f65))


### Chores

* **internal:** add dev dependency ([#11](https://github.com/julep-ai/node-sdk/issues/11)) ([79b7b2e](https://github.com/julep-ai/node-sdk/commit/79b7b2e8b623d6676a04dfa69543c3480c5adb96))

## 1.2.0 (2024-09-19)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/julep-ai/node-sdk/compare/v1.1.0...v1.2.0)

### Features

* **api:** add custom api key; change uuid4 to uuid ([#8](https://github.com/julep-ai/node-sdk/issues/8)) ([34d3e62](https://github.com/julep-ai/node-sdk/commit/34d3e621902caade8233ba7d409c2d658d17795e))

## 1.1.0 (2024-09-13)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/julep-ai/node-sdk/compare/v1.0.1...v1.1.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#5](https://github.com/julep-ai/node-sdk/issues/5)) ([35ea4aa](https://github.com/julep-ai/node-sdk/commit/35ea4aa0f2bb3eb14efc90126ea3faaa16adde39))

## 1.0.1 (2024-09-13)

Full Changelog: [v0.0.1-alpha.0...v1.0.1](https://github.com/julep-ai/node-sdk/compare/v0.0.1-alpha.0...v1.0.1)

### Features

* **api:** update via SDK Studio ([2af524c](https://github.com/julep-ai/node-sdk/commit/2af524c5ce783cbf07156d58865d8350363e118e))
* **api:** update via SDK Studio ([bc5f7f6](https://github.com/julep-ai/node-sdk/commit/bc5f7f6123214ac8a0189f6dd067d2fb15ecec96))
* **api:** update via SDK Studio ([3c46785](https://github.com/julep-ai/node-sdk/commit/3c467856521db99f30b5a0429756d3324f4c7a14))
* **api:** update via SDK Studio ([c2c15f3](https://github.com/julep-ai/node-sdk/commit/c2c15f3a558c68fbe84f7b7fe9ca9a57fb9ee859))
* **api:** update via SDK Studio ([6fb3e87](https://github.com/julep-ai/node-sdk/commit/6fb3e87a8f0f467574f57faf8deaac8bf311b97e))
* **api:** update via SDK Studio ([ea6b195](https://github.com/julep-ai/node-sdk/commit/ea6b1959bbf151611a7585e7944734d340dd91dd))
* **api:** update via SDK Studio ([fae9259](https://github.com/julep-ai/node-sdk/commit/fae925939b28ded2f528c8575e0b3be61dfaf66c))
* **api:** update via SDK Studio ([0ada40d](https://github.com/julep-ai/node-sdk/commit/0ada40dc60d853096164d7c21a8b149f10aad22d))
* **api:** update via SDK Studio ([2ab49dc](https://github.com/julep-ai/node-sdk/commit/2ab49dc8061b192252d7756d9da1c2a24814e94d))
* **api:** update via SDK Studio ([098dfd2](https://github.com/julep-ai/node-sdk/commit/098dfd2ff518391dea9209c948e1487a86cc594c))
* **api:** update via SDK Studio ([038672f](https://github.com/julep-ai/node-sdk/commit/038672f4af4d581b6b1a9180d66e2222a4668a66))
* **api:** update via SDK Studio ([5025c4b](https://github.com/julep-ai/node-sdk/commit/5025c4bf092aca49695efb65e31c16475cb83f4b))


### Chores

* go live ([#1](https://github.com/julep-ai/node-sdk/issues/1)) ([3fb0300](https://github.com/julep-ai/node-sdk/commit/3fb0300116eeff5b9fd2415eaa393817ea8e7f19))
* update SDK settings ([#3](https://github.com/julep-ai/node-sdk/issues/3)) ([761035c](https://github.com/julep-ai/node-sdk/commit/761035c2a9662827cee487c7c6464edc0c4cb4bf))
