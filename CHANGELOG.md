# Changelog

## 3.0.0 (2026-09-01)

Full Changelog: [v2.7.4...v3.0.0](https://github.com/julep-ai/node-sdk/compare/v2.7.4...v3.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([0602cc7](https://github.com/julep-ai/node-sdk/commit/0602cc745f55c0871505ed2e62983c5375474fb3))
* **api:** api update ([f5f76e7](https://github.com/julep-ai/node-sdk/commit/f5f76e7de501387cb282816bfaf0e77a728bb7dd))
* **api:** api update ([f9d4d09](https://github.com/julep-ai/node-sdk/commit/f9d4d09a84f8e7e0effee08a80ae72f73962d6fe))
* **api:** api update ([53404bd](https://github.com/julep-ai/node-sdk/commit/53404bd2c0d6902eb8f47c408aa03bfeaebf8ce5))
* **mcp:** add an option to disable code tool ([2219842](https://github.com/julep-ai/node-sdk/commit/2219842f9b441a019c9bd6a71043b95c8210c76b))
* **mcp:** add client infer to cloudflare oauth screen ([3ea626e](https://github.com/julep-ai/node-sdk/commit/3ea626ec8f75069484d2a0a4fd133c7993c94dbe))
* **mcp:** add code execution tool ([1e00ca0](https://github.com/julep-ai/node-sdk/commit/1e00ca0f773fc45220972ee123ad198f06f95604))
* **mcp:** add detail field to docs search tool ([122e298](https://github.com/julep-ai/node-sdk/commit/122e29863c49d7d88158a672a944e9a0fc591557))
* **mcp:** add docs search tool ([269087f](https://github.com/julep-ai/node-sdk/commit/269087f17b239c24f60c7bf0c771e264bdb6756c))
* **mcp:** add initial server instructions ([f0ae533](https://github.com/julep-ai/node-sdk/commit/f0ae533be1443f9f8b5e3a0a984e50d975ea4abe))
* **mcp:** add logging when environment variable is set ([be36e15](https://github.com/julep-ai/node-sdk/commit/be36e1520c295adc4396ff8f85b46203e3a3b8f4))
* **mcp:** add mcp bundles to build script ([1bb1db5](https://github.com/julep-ai/node-sdk/commit/1bb1db5552b897d8122013a3a701203796a1964c))
* **mcp:** add option for including docs tools ([7ec226e](https://github.com/julep-ai/node-sdk/commit/7ec226e7ff1f5ad69e8e2dfed7c3916391e0db88))
* **mcp:** add option to infer mcp client ([2d55b8d](https://github.com/julep-ai/node-sdk/commit/2d55b8db6791b4780ab33d6bc3beb3e168f4640d))
* **mcp:** add typescript check to code execution tool ([01c6570](https://github.com/julep-ai/node-sdk/commit/01c6570a42b7627073d227b58f22290d75a69e2c))
* **mcp:** add unix socket option for remote MCP ([e2fdc8b](https://github.com/julep-ai/node-sdk/commit/e2fdc8be5b7f55135fe889bb68ff076ff2e83c9f))
* **mcp:** allow setting logging level ([92e01a7](https://github.com/julep-ai/node-sdk/commit/92e01a7daca8f851400d1bce1d1a04f4c9636a2b))
* **mcp:** change remote server query option parsing logic ([1ce88f0](https://github.com/julep-ai/node-sdk/commit/1ce88f05b38e6e58c248f4a0891142026bcfe98a))
* **mcp:** enable experimental docs search tool ([c09861a](https://github.com/julep-ai/node-sdk/commit/c09861a599eb52fb7d38a67d5eec9552f55226f4))
* **mcp:** enable optional code execution tool on http mcp servers ([5aa88d4](https://github.com/julep-ai/node-sdk/commit/5aa88d4899c9a29e93de6facf2d5f97c837679f7))
* **mcp:** expose client options in `streamableHTTPApp` ([c79c312](https://github.com/julep-ai/node-sdk/commit/c79c3127c770a96d946ed25d9a413d701cd807ff))
* **mcp:** handle code mode calls in the Stainless API ([e4ad4ae](https://github.com/julep-ai/node-sdk/commit/e4ad4ae8f90c4332df65f8d5d0b357db47ab6d4a))
* **mcp:** parse query string as mcp client options in mcp server ([ca31e54](https://github.com/julep-ai/node-sdk/commit/ca31e54b1bb7be289a73cad5ed1fd445a9b9f99c))
* **mcp:** remote server with passthru auth ([e98a089](https://github.com/julep-ai/node-sdk/commit/e98a0891b4800926d6d8ac8b796f93fd193f27ec))
* **mcp:** return logs on code tool errors ([67c1ed9](https://github.com/julep-ai/node-sdk/commit/67c1ed96991234dff93cc1cea655cafb0c2622c7))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([cf31c2b](https://github.com/julep-ai/node-sdk/commit/cf31c2b919d279d383ba8071a6f63dad27ea6356))
* support setting headers via env ([60a04b0](https://github.com/julep-ai/node-sdk/commit/60a04b0ad2ffdbd22b400a9777247877e9f6a278))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([ce6f62c](https://github.com/julep-ai/node-sdk/commit/ce6f62cd2ee3b6c9164e3439f5ce10eaaaedd822))
* **client:** incorrect offset pagination check ([87e78b8](https://github.com/julep-ai/node-sdk/commit/87e78b8b6e5fc759686bdc2c390838d6faf27844))
* **client:** preserve URL params already embedded in path ([68777a4](https://github.com/julep-ai/node-sdk/commit/68777a451785d4fa783dc2a34f76518487a02d74))
* coerce nullable values to undefined ([3d6056f](https://github.com/julep-ai/node-sdk/commit/3d6056f40235d4360435af2e8511bb5993cbb8e4))
* **docs/contributing:** correct pnpm link command ([f8fe092](https://github.com/julep-ai/node-sdk/commit/f8fe092f2718b5e89bfe896b892dbb07e2448cf4))
* **docs:** fix mcp installation instructions for remote servers ([05daa38](https://github.com/julep-ai/node-sdk/commit/05daa380670e0bca87be74194c9bbec908c216ea))
* **mcp:** add client instantiation options to code tool ([adb99b7](https://github.com/julep-ai/node-sdk/commit/adb99b75fbc01aa5ce7703f521fbc5066b474c4a))
* **mcp:** allow falling back for required env variables ([b593ded](https://github.com/julep-ai/node-sdk/commit/b593dedf8f5ce6c1a64ce890205d254dfc1dc111))
* **mcpb:** pin @anthropic-ai/mcpb version ([e2809b3](https://github.com/julep-ai/node-sdk/commit/e2809b3a047cbdf1a54b6394198bf727a3bd304a))
* **mcp:** bump agents version in cloudflare worker MCP servers ([4e43395](https://github.com/julep-ai/node-sdk/commit/4e43395cea27367610554cc8258146e2a2164ee1))
* **mcp:** correct code tool API endpoint ([b19afe0](https://github.com/julep-ai/node-sdk/commit/b19afe08dd9c1337aa2e1fb3532c717fc62233b9))
* **mcp:** correct code tool api output types ([4f83af8](https://github.com/julep-ai/node-sdk/commit/4f83af8ec39a23664f6e8ab66f0739a6069628ed))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([b60cead](https://github.com/julep-ai/node-sdk/commit/b60cead152bee65d4623d6cd7d3e780a9849ba6a))
* **mcp:** fix bug in header handling ([c0d1022](https://github.com/julep-ai/node-sdk/commit/c0d102255f5453422dc5b562a0a0c0c7049e0c69))
* **mcp:** fix cli argument parsing logic ([e0d84e5](https://github.com/julep-ai/node-sdk/commit/e0d84e5d5b723ab7f5b2a9131d28616086453a6c))
* **mcp:** fix env parsing ([a985915](https://github.com/julep-ai/node-sdk/commit/a985915a6cc4cde74151a92754bdb4a09ed7bad0))
* **mcp:** fix options parsing ([23285ec](https://github.com/julep-ai/node-sdk/commit/23285ec43de3aa4f02b3707cca36ab0a922c2392))
* **mcp:** fix query options parsing ([1fa531c](https://github.com/julep-ai/node-sdk/commit/1fa531ceb0e673aac6179dadd83a65d4f36c7642))
* **mcp:** fix some response schemas used for jq filtering ([b0f97cf](https://github.com/julep-ai/node-sdk/commit/b0f97cfbdc8f4e4beba885684d946b3aa3532982))
* **mcp:** fix uploading dxt release assets ([7854bfd](https://github.com/julep-ai/node-sdk/commit/7854bfdcc35420bb1825a30ab01b39e5a0023e7a))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([12bd79f](https://github.com/julep-ai/node-sdk/commit/12bd79f67acb13742b83e0bd692f58e8759cef8b))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([011fc93](https://github.com/julep-ai/node-sdk/commit/011fc935929ce55929f0c6ffd1a3d37a0a70e966))
* **mcp:** pass base url to code tool ([9650d43](https://github.com/julep-ai/node-sdk/commit/9650d439fa5681d3581fb0cc4b8e5c451cd21b56))
* **mcp:** resolve a linting issue in server code ([e866428](https://github.com/julep-ai/node-sdk/commit/e866428139e209784086a2219660fa6f6168a9e4))
* **mcp:** return correct lines on typescript errors ([4d8eb4c](https://github.com/julep-ai/node-sdk/commit/4d8eb4ced3e338c82b3618b81f699a942f780b34))
* **mcp:** return tool execution error on api error ([48209fc](https://github.com/julep-ai/node-sdk/commit/48209fc16212d444baa94141825deb17972d9c5f))
* **mcp:** return tool execution error on jq failure ([c717c94](https://github.com/julep-ai/node-sdk/commit/c717c942ba11a3bedd2af7b8e4d660dcbb2419a2))
* **mcp:** update cloudflare worker host page ([04faac6](https://github.com/julep-ai/node-sdk/commit/04faac63d9a19037f6a5e0567740a74627b4b999))
* **mcp:** update code tool prompt ([e93faff](https://github.com/julep-ai/node-sdk/commit/e93faff361d5a02179e77315540433f198db828e))
* **mcp:** update prompt ([8a606fa](https://github.com/julep-ai/node-sdk/commit/8a606fa0774ebc5117f20cea7167ad8e06cce042))


### Performance Improvements

* faster formatting ([fbb1589](https://github.com/julep-ai/node-sdk/commit/fbb1589e1287a6b7d4880a243ab1559d3bf29180))


### Chores

* break long lines in snippets into multiline ([a60ce49](https://github.com/julep-ai/node-sdk/commit/a60ce4955a4945cf84e94969a8e5669a03796535))
* ci build action ([82be9a4](https://github.com/julep-ai/node-sdk/commit/82be9a42306af22a0e70f909553ae05643389b15))
* **ci:** escape input path in publish-npm workflow ([fcfb53d](https://github.com/julep-ai/node-sdk/commit/fcfb53df9bb6276b164507dd3cf8a200d5229787))
* **ci:** skip lint on metadata-only changes ([e202d8f](https://github.com/julep-ai/node-sdk/commit/e202d8f761194bafaddd755810fa1280c2a42007))
* **ci:** skip uploading artifacts on stainless-internal branches ([a8f6594](https://github.com/julep-ai/node-sdk/commit/a8f65947d376262e7455c017077b202a0fc1ef14))
* **ci:** upgrade `actions/github-script` ([53d6cd1](https://github.com/julep-ai/node-sdk/commit/53d6cd17f9d58f7b3d365b4e26b7368d1062ad4a))
* **client:** do not parse responses with empty content-length ([093077c](https://github.com/julep-ai/node-sdk/commit/093077cb4ae2fdfdfd6fc556f6da33f0ae9fedfd))
* **codegen:** internal codegen update ([a7f4ec9](https://github.com/julep-ai/node-sdk/commit/a7f4ec91e05ebe0764064280a4e1942c56bc254f))
* **deps:** update dependency node-fetch to v2.6.13 ([c62fad2](https://github.com/julep-ai/node-sdk/commit/c62fad2a45e62eb30e842a7a0795316c43fadb6f))
* do not install brew dependencies in ./scripts/bootstrap by default ([ad1dec4](https://github.com/julep-ai/node-sdk/commit/ad1dec48b3925c5a522192cc519e2e8782d24b37))
* extract some types in mcp docs ([438f807](https://github.com/julep-ai/node-sdk/commit/438f8073a887f9375e482d3ea4a744b3ba3d18c7))
* fix typo in descriptions ([6cee00e](https://github.com/julep-ai/node-sdk/commit/6cee00e377897ac68715f98ce54913efc90d6036))
* **internal:** add health check to MCP server when running in HTTP mode ([bbc38ee](https://github.com/julep-ai/node-sdk/commit/bbc38ee0125f68bfcfca864c55350a8b61fca00e))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([bb39c62](https://github.com/julep-ai/node-sdk/commit/bb39c62e71ecb610721b73c9eedc799318854e33))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([be6c595](https://github.com/julep-ai/node-sdk/commit/be6c595d1058dda5acdc0007ebea87c3037094de))
* **internal:** allow the mock server port to be set with STAINLESS_MOCK_PORT ([ca159bd](https://github.com/julep-ai/node-sdk/commit/ca159bd9807e9d991dbcf8409544f5fd47f7bae4))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([f7edfed](https://github.com/julep-ai/node-sdk/commit/f7edfed04953a3a76a03e759a787fbe51d7a2e8b))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([3ffe8a3](https://github.com/julep-ai/node-sdk/commit/3ffe8a33f4a7700f1305a5a9e1c8b95c88b646ca))
* **internal:** bump MCP dependencies ([650313f](https://github.com/julep-ai/node-sdk/commit/650313f7cd00d42e82c3f79a5bab480351f1169e))
* **internal:** cache fetch instruction calls in MCP server ([7019a7f](https://github.com/julep-ai/node-sdk/commit/7019a7fb0d1cbf0fd7be22b7725160ff113688dc))
* **internal:** codegen related update ([cb652a6](https://github.com/julep-ai/node-sdk/commit/cb652a632cc410394ad03e203b6166e9604c3674))
* **internal:** codegen related update ([6a9188c](https://github.com/julep-ai/node-sdk/commit/6a9188cd2a36625cae499f176ea6053b2da42382))
* **internal:** codegen related update ([35548e8](https://github.com/julep-ai/node-sdk/commit/35548e8272eabafb3c8fb1901fcb14f73edea0b7))
* **internal:** codegen related update ([2a2d298](https://github.com/julep-ai/node-sdk/commit/2a2d298b32d9c9c8daa2009d4b83c0068d6bd0cb))
* **internal:** codegen related update ([9961fe5](https://github.com/julep-ai/node-sdk/commit/9961fe58ee75ee87ca60e85206c92e1acf1a317d))
* **internal:** codegen related update ([6346bbb](https://github.com/julep-ai/node-sdk/commit/6346bbbd655b2aca788fa1f45dba6f3f24442269))
* **internal:** codegen related update ([5edc9bb](https://github.com/julep-ai/node-sdk/commit/5edc9bb58a59e16845882adee0a44f330c69d143))
* **internal:** codegen related update ([f9228eb](https://github.com/julep-ai/node-sdk/commit/f9228ebaca9b62c3f6f957b9eb270f7b8215f6d7))
* **internal:** codegen related update ([ce94b68](https://github.com/julep-ai/node-sdk/commit/ce94b68a9e9f62411be030a0b950c20e112e9d58))
* **internal:** codegen related update ([af60a89](https://github.com/julep-ai/node-sdk/commit/af60a89e18c701b754155c534a89b4aa6109a20f))
* **internal:** codegen related update ([0612bd5](https://github.com/julep-ai/node-sdk/commit/0612bd5c2d3c7fcdecc5fb9d5804125a05c94758))
* **internal:** codegen related update ([0b334db](https://github.com/julep-ai/node-sdk/commit/0b334db1c71eb79a6f76be368946cb20956a0750))
* **internal:** codegen related update ([8b8ceaf](https://github.com/julep-ai/node-sdk/commit/8b8ceafd6a23eb616d25458811a8d9ec651f1feb))
* **internal:** codegen related update ([3df78ae](https://github.com/julep-ai/node-sdk/commit/3df78ae0929412a0421d7f169c5bb9f768f32e43))
* **internal:** codegen related update ([4d9100f](https://github.com/julep-ai/node-sdk/commit/4d9100f3075bf341f628a83867934b5972c09bf0))
* **internal:** codegen related update ([1e6655c](https://github.com/julep-ai/node-sdk/commit/1e6655c9531a6e198b7d8d2f29b8e4375ba82345))
* **internal:** codegen related update ([5783182](https://github.com/julep-ai/node-sdk/commit/5783182f2d0940f311c47a2779023e4b63f1983a))
* **internal:** codegen related update ([47bcda4](https://github.com/julep-ai/node-sdk/commit/47bcda4efbce2c72a4fc36dbd7b10b97f313bc3d))
* **internal:** codegen related update ([7fb00f0](https://github.com/julep-ai/node-sdk/commit/7fb00f02ff4e2e992e01771465f95efa3c93abdf))
* **internal:** codegen related update ([6fd386f](https://github.com/julep-ai/node-sdk/commit/6fd386f5bf3d5fb6cc5160117dcd75225d033f58))
* **internal:** codegen related update ([14f1d5a](https://github.com/julep-ai/node-sdk/commit/14f1d5a803b499ca8e6b488beae1f69f04627a3f))
* **internal:** codegen related update ([afd9e2f](https://github.com/julep-ai/node-sdk/commit/afd9e2f21798037026c4aa52f3fb23e4b0d4c119))
* **internal:** codegen related update ([cf90b27](https://github.com/julep-ai/node-sdk/commit/cf90b27161d72ab3ebef74ce779c2f8341457e35))
* **internal:** codegen related update ([f9801ac](https://github.com/julep-ai/node-sdk/commit/f9801ac0ec4e91a5165f34a1a12bcfea73a5add2))
* **internal:** codegen related update ([b09d85c](https://github.com/julep-ai/node-sdk/commit/b09d85c6a6e0bc2eac482ba9cfb9b7b09ec5679d))
* **internal:** fix incremental formatting in some cases ([9db3270](https://github.com/julep-ai/node-sdk/commit/9db3270f61c87cd831c4e4640d9dca3d52e03b9f))
* **internal:** fix MCP cloudflare worker builds ([30ab041](https://github.com/julep-ai/node-sdk/commit/30ab0415ab06ab35588546bd0a43311d7e344e07))
* **internal:** fix MCP cloudflare worker initialization ([1df92ef](https://github.com/julep-ai/node-sdk/commit/1df92ef83b5b9ea78cc75ada2820da8df27e6016))
* **internal:** fix MCP docker image builds in yarn projects ([0a95651](https://github.com/julep-ai/node-sdk/commit/0a95651441d481c1891cadaddd46a353a4f120c3))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([08a9df6](https://github.com/julep-ai/node-sdk/commit/08a9df6b64fbab7025855988c54cea1d5009f143))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([6f70f99](https://github.com/julep-ai/node-sdk/commit/6f70f99e3959209dc77b14f0f08c2e200b3127e1))
* **internal:** fix MCP server import ordering ([9702a7d](https://github.com/julep-ai/node-sdk/commit/9702a7dede53e5aa321a791932e3375738caef80))
* **internal:** fix MCP server TS errors that occur with required client options ([b837153](https://github.com/julep-ai/node-sdk/commit/b8371530792c4fb926bac64c65b1a5ffe8b9f071))
* **internal:** formatting change ([12fb0e6](https://github.com/julep-ai/node-sdk/commit/12fb0e6a7dd00c23e1be0187f9980c9e3494974e))
* **internal:** gitignore .mcpb files ([1379dad](https://github.com/julep-ai/node-sdk/commit/1379dad5516bf5c4d7377ba5b0fcac8acd2c6564))
* **internal:** grammar fix (it's -&gt; its) ([0683aeb](https://github.com/julep-ai/node-sdk/commit/0683aeb95c43df79890d5604597c947a3c5d7396))
* **internal:** ignore .eslintcache ([19aa6c1](https://github.com/julep-ai/node-sdk/commit/19aa6c137cd938c55a4a1ad639ac6998a4ad0063))
* **internal:** improve layout of generated MCP server files ([5dbe7e6](https://github.com/julep-ai/node-sdk/commit/5dbe7e632e5f4672f857282dc8ef1e8aca929d91))
* **internal:** improve local docs search for MCP servers ([6aa2f3b](https://github.com/julep-ai/node-sdk/commit/6aa2f3b60abbd010009ba7cd997459077983e3d3))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([b96aed5](https://github.com/julep-ai/node-sdk/commit/b96aed5d2feb49f7dca7fb2dc66d15ebb3288bda))
* **internal:** make MCP code execution location configurable via a flag ([04819f0](https://github.com/julep-ai/node-sdk/commit/04819f04aafc01010f1f679cc4e4b1d56a714690))
* **internal:** make mcp-server publishing public by defaut ([a80dd72](https://github.com/julep-ai/node-sdk/commit/a80dd722b30a9f2448d873dd63084daa3377ebdc))
* **internal:** more robust bootstrap script ([c909c52](https://github.com/julep-ai/node-sdk/commit/c909c52da759b9e89a8bcace1480981a4cba5bb1))
* **internal:** move publish config ([e9e8777](https://github.com/julep-ai/node-sdk/commit/e9e87771a244b79cf4acfb3eac691a6ece19dd45))
* **internal:** move stringifyQuery implementation to internal function ([cad2b7b](https://github.com/julep-ai/node-sdk/commit/cad2b7b8c34545252f9b884c6ac8285e459e6f57))
* **internal:** refactor array check ([fd2fa21](https://github.com/julep-ai/node-sdk/commit/fd2fa21ceeef064b14d4db7282d0927170ec6103))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([108db42](https://github.com/julep-ai/node-sdk/commit/108db426ed1866c8e2406a485c3d4a71b1e6fba3))
* **internal:** remove .eslintcache ([0a2fdd6](https://github.com/julep-ai/node-sdk/commit/0a2fdd60302b10b9b5ccfc25902cecacda32444a))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([1174a7f](https://github.com/julep-ai/node-sdk/commit/1174a7f5b63bb5cbb0233ecdb79bcb5562339b96))
* **internal:** show error causes in MCP servers when running in local mode ([9c2dff4](https://github.com/julep-ai/node-sdk/commit/9c2dff4ec5e6e2241e47f54a94c6fbffb1f8711c))
* **internal:** support custom-instructions-path flag in MCP servers ([df1f35d](https://github.com/julep-ai/node-sdk/commit/df1f35d538ca803c4032b364bbffe47182f58b5c))
* **internal:** support local docs search in MCP servers ([ad564a7](https://github.com/julep-ai/node-sdk/commit/ad564a773a7c779f3dd97660ce8f74a95b1fe226))
* **internal:** support oauth authorization code flow for MCP servers ([9b420b6](https://github.com/julep-ai/node-sdk/commit/9b420b6b55b1ade18395459adacade846e783e19))
* **internal:** support type annotations when running MCP in local execution mode ([d714c04](https://github.com/julep-ai/node-sdk/commit/d714c042ae1097f32f42c556fb2b097dc5fb7402))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([308a359](https://github.com/julep-ai/node-sdk/commit/308a359e4a580c734483e2d119c139621fdb6e8f))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([6500bef](https://github.com/julep-ai/node-sdk/commit/6500bef012a4f29b5bdef0d93eb89c6a892b2779))
* **internal:** tweak CI branches ([b4dec8a](https://github.com/julep-ai/node-sdk/commit/b4dec8a91c3d4ff4f0bd84f6fe150c0bd57029d5))
* **internal:** update `actions/checkout` version ([54f6539](https://github.com/julep-ai/node-sdk/commit/54f65398dbd58cbf1160dd1c92ab9861a4da2789))
* **internal:** update agents version ([16a7ae1](https://github.com/julep-ai/node-sdk/commit/16a7ae1613640e0ccce5a1d9d189e64d9802c92e))
* **internal:** update comment in script ([dae9b0f](https://github.com/julep-ai/node-sdk/commit/dae9b0fbfa4616d0211eaff2747723e4eca697c8))
* **internal:** update dependencies to address dependabot vulnerabilities ([f1c4c46](https://github.com/julep-ai/node-sdk/commit/f1c4c46854fae516e7480b37cc224f12ad7cbcd5))
* **internal:** update gitignore ([a2b641d](https://github.com/julep-ai/node-sdk/commit/a2b641d32841de73be2c00d90a30447805749234))
* **internal:** update multipart form array serialization ([c000412](https://github.com/julep-ai/node-sdk/commit/c0004120122f34872c492260713d55e1b7923475))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([e671738](https://github.com/julep-ai/node-sdk/commit/e671738657f0a6a87d30991300304d6baa7a0ac9))
* **internal:** upgrade babel, qs, js-yaml ([5e48026](https://github.com/julep-ai/node-sdk/commit/5e48026bdc5cdeac12dceddcf9f96ad03d296872))
* **internal:** upgrade hono ([c2c19a7](https://github.com/julep-ai/node-sdk/commit/c2c19a72322d02cfc653436c23e31596e1893dc3))
* **internal:** upgrade wrangler version ([b1dac50](https://github.com/julep-ai/node-sdk/commit/b1dac506dc6e3e1c8add18a2d34703a13d981049))
* **internal:** use link instead of file in MCP server package.json files ([8aee377](https://github.com/julep-ai/node-sdk/commit/8aee3779d01868820a02e854e497418324de5096))
* **internal:** use npm pack for build uploads ([5c45d4c](https://github.com/julep-ai/node-sdk/commit/5c45d4ca134673d609811ed299cf05454a2e0cfb))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([ba5d919](https://github.com/julep-ai/node-sdk/commit/ba5d9193ed364a6d0db0166b31d22c2234c4d33e))
* mcp code tool explicit error message when missing a run function ([bc1b68e](https://github.com/julep-ai/node-sdk/commit/bc1b68ef5d32565ed56f4906df6d92bd3e0e4593))
* **mcp-server:** add support for session id, forward client info ([62a6382](https://github.com/julep-ai/node-sdk/commit/62a63823d02164db0334d1cdd5a2ca5488f94773))
* **mcp-server:** improve instructions ([07cd946](https://github.com/julep-ai/node-sdk/commit/07cd9461f66fcac361591147d72644744ca731f5))
* **mcp-server:** increase local docs search result count from 5 to 10 ([7b291ea](https://github.com/julep-ai/node-sdk/commit/7b291eadbf0a7d31c79d90cebc519bc97498237e))
* **mcp-server:** log client info ([5c84254](https://github.com/julep-ai/node-sdk/commit/5c84254a1a14f91ba969a4fa26966b0b7696bfa3))
* **mcp-server:** return access instructions for 404 without API key ([f8a6c88](https://github.com/julep-ai/node-sdk/commit/f8a6c88cd963f6bd9f8ccfe4ef1690f8351ea7b2))
* **mcp:** add cors to oauth metadata route ([cc312bc](https://github.com/julep-ai/node-sdk/commit/cc312bcae0e89e1d92eb515ec80fc761d5e91729))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([3341c0e](https://github.com/julep-ai/node-sdk/commit/3341c0e1190583108b1e17a867a30c9b6d42e316))
* **mcp:** add intent param to execute tool ([d460803](https://github.com/julep-ai/node-sdk/commit/d460803b844c4d3d700a4e7826e4a5520fe05871))
* **mcp:** add line numbers to code tool errors ([70bf6d0](https://github.com/julep-ai/node-sdk/commit/70bf6d073837b67d3f2b7dee3bc5a623822c3388))
* **mcp:** allow pointing `docs_search` tool at other URLs ([29f1271](https://github.com/julep-ai/node-sdk/commit/29f127175999ad32c2b29a6148c00b101a5f2910))
* **mcp:** clarify http auth error ([b8623e9](https://github.com/julep-ai/node-sdk/commit/b8623e9a8d4ab974c59be1c29ffdacdd5e1e6d8e))
* **mcp:** correctly update version in sync with sdk ([a4bb9b3](https://github.com/julep-ai/node-sdk/commit/a4bb9b3004e2868c7b0c06d6a69f0ba63f6cbd58))
* **mcp:** document remote server in README.md ([0b818f2](https://github.com/julep-ai/node-sdk/commit/0b818f293d83c27fd26f625a69f3e17ead61bbea))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([61599b5](https://github.com/julep-ai/node-sdk/commit/61599b500ca055a28b2b4cc5841e536bc80c7a74))
* **mcp:** minor cleanup of types and package.json ([dc011fe](https://github.com/julep-ai/node-sdk/commit/dc011fea568e36e556942012656a4cfcc4ccd101))
* **mcp:** pass intent param to execute handler ([0b69eda](https://github.com/julep-ai/node-sdk/commit/0b69edaec0332ac1da055ffea2a9c21d2369d816))
* **mcp:** refactor streamable http transport ([00cb972](https://github.com/julep-ai/node-sdk/commit/00cb972cf1a90c69d879c10d0417e0429f76b88d))
* **mcp:** remove deprecated tool schemes ([b4e317d](https://github.com/julep-ai/node-sdk/commit/b4e317d26cb44741474c41bd0249382579ed0ecd))
* **mcp:** rename dxt to mcpb ([551b096](https://github.com/julep-ai/node-sdk/commit/551b0962e23197a7f840e72481bfd1957603ddff))
* **mcp:** up tsconfig lib version to es2022 ([9efac91](https://github.com/julep-ai/node-sdk/commit/9efac91e636f769f646ef02324a7770f50d51708))
* **mcp:** update lockfile ([5b0ef90](https://github.com/julep-ai/node-sdk/commit/5b0ef90b166d510f91594c4ab1782466b3d2eebd))
* **mcp:** update package.json ([0d2ee4b](https://github.com/julep-ai/node-sdk/commit/0d2ee4b3982034605a315adfdc2aecc6a6fbc5bd))
* **mcp:** update README ([0d69b8d](https://github.com/julep-ai/node-sdk/commit/0d69b8d3a63228328cadcaeb97f8ec06942f691e))
* **mcp:** update types ([6b6f77c](https://github.com/julep-ai/node-sdk/commit/6b6f77c4742e866839b0edb290422f61c96e44c2))
* **mcp:** upgrade dependencies ([4977c78](https://github.com/julep-ai/node-sdk/commit/4977c7802647aee4e24eb2c9c3200e0329d4b1f4))
* **mcp:** upgrade jq-web ([62ddb5b](https://github.com/julep-ai/node-sdk/commit/62ddb5b12b87bcf76501eb3819524f1b06e48113))
* **mcp:** upload dxt as release asset ([8565331](https://github.com/julep-ai/node-sdk/commit/856533108438a2ff00f3cbf84debf022ad4b2658))
* **test:** do not count install time for mock server timeout ([92d3dfe](https://github.com/julep-ai/node-sdk/commit/92d3dfe223f91ddd34a7346cec7c00975a95ccc0))
* **tests:** bump steady to v0.19.4 ([6b489ac](https://github.com/julep-ai/node-sdk/commit/6b489acd994c26ad41e9fecb51868ea99d9201fa))
* **tests:** bump steady to v0.19.5 ([c586f1c](https://github.com/julep-ai/node-sdk/commit/c586f1c06174419e92c09eaf12d67a4f2d11f377))
* **tests:** bump steady to v0.19.6 ([cea3a42](https://github.com/julep-ai/node-sdk/commit/cea3a427b3892ae8b11bb88c5fbe24efd64ecae4))
* **tests:** bump steady to v0.19.7 ([d1b6fb6](https://github.com/julep-ai/node-sdk/commit/d1b6fb68d35f590a5537456fa610e890b1e7557f))
* **tests:** bump steady to v0.20.1 ([1b517ca](https://github.com/julep-ai/node-sdk/commit/1b517ca83d26e891003d505b594330c31c035300))
* **tests:** bump steady to v0.20.2 ([4bfc8ce](https://github.com/julep-ai/node-sdk/commit/4bfc8ced1f908f2013bcaa25e97b5951349a8a84))
* **tests:** bump steady to v0.22.1 ([8f72b8f](https://github.com/julep-ai/node-sdk/commit/8f72b8f568c96e1ee269c45650f4e24b7a6ba277))
* update @stainless-api/prism-cli to v5.15.0 ([3237c3b](https://github.com/julep-ai/node-sdk/commit/3237c3b7e985e59c6459fbda21f3e79353187df1))
* update CI script ([eb0d865](https://github.com/julep-ai/node-sdk/commit/eb0d8650804d09b5a0ffe4561250b1e82eaf979d))
* update lockfile ([1fb9f41](https://github.com/julep-ai/node-sdk/commit/1fb9f4126f4c5a17a4317dcdf514100a10a94f69))
* update mock server docs ([ef69c2e](https://github.com/julep-ai/node-sdk/commit/ef69c2ecd67b8b90652df07d612d81c67a69414c))
* use latest @modelcontextprotocol/sdk ([4832ece](https://github.com/julep-ai/node-sdk/commit/4832ececf6d2f9a78b9ca32a17b03a5b232fec37))
* use proper capitalization for WebSockets ([dd98637](https://github.com/julep-ai/node-sdk/commit/dd986372ba78b063eb06147d109c74a6129e29c7))
* use structured error when code execution tool errors ([db94eb7](https://github.com/julep-ai/node-sdk/commit/db94eb75a0897677db72191a268c49129c7c5183))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([e925a0f](https://github.com/julep-ai/node-sdk/commit/e925a0f9524b70237decae3ee8351378e5fc700a))
* **mcp:** add a README link to add server to VS Code or Claude Code ([72a04d7](https://github.com/julep-ai/node-sdk/commit/72a04d70df45bd08ef155dec5e09f540abcd9abd))
* prominently feature MCP server setup in root SDK readmes ([a473911](https://github.com/julep-ai/node-sdk/commit/a47391196153cd1e9dcce4ab0113f9eb4b80be9c))


### Refactors

* **tests:** switch from prism to steady ([ecea3ce](https://github.com/julep-ai/node-sdk/commit/ecea3ceed546c240b31e359acb55fcc4df4d03ef))

## 2.7.4 (2025-08-01)

Full Changelog: [v2.7.3...v2.7.4](https://github.com/julep-ai/node-sdk/compare/v2.7.3...v2.7.4)

### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([04e0ce1](https://github.com/julep-ai/node-sdk/commit/04e0ce11d2542ca2c71300c16dd7c99274085e65))
* **mcp:** reverse validJson capability option and limit scope ([fdf4ff5](https://github.com/julep-ai/node-sdk/commit/fdf4ff567495cc6f1d0c26ad9b9e671a5f26a290))

## 2.7.3 (2025-07-31)

Full Changelog: [v2.7.2...v2.7.3](https://github.com/julep-ai/node-sdk/compare/v2.7.2...v2.7.3)

### Bug Fixes

* **mcp:** fix tool description of jq_filter ([615de9e](https://github.com/julep-ai/node-sdk/commit/615de9e72197da1e61111f0df3273706aad518fd))


### Chores

* **internal:** codegen related update ([e9a2c7d](https://github.com/julep-ai/node-sdk/commit/e9a2c7d874c9090bc2f6d2834d378b1cdd01cb44))
* **internal:** remove redundant imports config ([08964f9](https://github.com/julep-ai/node-sdk/commit/08964f949b6bb26b6bcb864d776b29832fc0c35f))

## 2.7.2 (2025-07-18)

Full Changelog: [v2.7.1...v2.7.2](https://github.com/julep-ai/node-sdk/compare/v2.7.1...v2.7.2)

### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([e2d3215](https://github.com/julep-ai/node-sdk/commit/e2d321540c85a6deb86cc00d7a2351c4ae4deb95))


### Chores

* **mcp:** formatting ([3dbdfb0](https://github.com/julep-ai/node-sdk/commit/3dbdfb0ac5003b02177407cb47ab5a4ae6b97505))
* **mcp:** rework imports in tools ([a7c35a4](https://github.com/julep-ai/node-sdk/commit/a7c35a4740c518ab486d85ffa1d129255b6c0659))

## 2.7.1 (2025-07-16)

Full Changelog: [v2.7.0...v2.7.1](https://github.com/julep-ai/node-sdk/compare/v2.7.0...v2.7.1)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([c64d3ec](https://github.com/julep-ai/node-sdk/commit/c64d3ec3e55e973104cfdc4d8797b05d13a58dc2))


### Documentation

* **mcp:** correct instructions for adding to claude web ([cf45fda](https://github.com/julep-ai/node-sdk/commit/cf45fdad18b5beef4038159917c91f2534156b2b))

## 2.7.0 (2025-07-11)

Full Changelog: [v2.6.0...v2.7.0](https://github.com/julep-ai/node-sdk/compare/v2.6.0...v2.7.0)

### Features

* **api:** api update ([6e29fd6](https://github.com/julep-ai/node-sdk/commit/6e29fd69abc3ed2038efb251eaf1055cdb919bca))


### Chores

* **internal:** codegen related update ([86751a0](https://github.com/julep-ai/node-sdk/commit/86751a0a75086df3c7698a279fb5d2a51bdf0b1d))

## 2.6.0 (2025-07-10)

Full Changelog: [v2.5.2...v2.6.0](https://github.com/julep-ai/node-sdk/compare/v2.5.2...v2.6.0)

### Features

* **api:** api update ([2f7ac24](https://github.com/julep-ai/node-sdk/commit/2f7ac2483390eea44a594fd47e93fd7f05d1c9c2))


### Chores

* make some internal functions async ([0bb5077](https://github.com/julep-ai/node-sdk/commit/0bb50772a19ed27ba332d3f65ae150932e0e7385))

## 2.5.2 (2025-07-04)

Full Changelog: [v2.5.1...v2.5.2](https://github.com/julep-ai/node-sdk/compare/v2.5.1...v2.5.2)

### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([d13a377](https://github.com/julep-ai/node-sdk/commit/d13a377a31c485286e5be1a95cc89db5bafdb8cb))
* **client:** don't send `Content-Type` for bodyless methods ([1ca58f5](https://github.com/julep-ai/node-sdk/commit/1ca58f5fe382c38deed4078922d1cc2b064fb728))

## 2.5.1 (2025-07-03)

Full Changelog: [v2.5.0...v2.5.1](https://github.com/julep-ai/node-sdk/compare/v2.5.0...v2.5.1)

### Bug Fixes

* **mcp:** define `.well-known/oauth-protected-resource` ([4e50010](https://github.com/julep-ai/node-sdk/commit/4e500107adb531f1b3b5f106c2e52c31afcd9cd1))


### Chores

* mention unit type in timeout docs ([ed8df2b](https://github.com/julep-ai/node-sdk/commit/ed8df2b89aad1ad07ff9e7c881517cdaea56b34c))

## 2.5.0 (2025-07-01)

Full Changelog: [v2.4.0...v2.5.0](https://github.com/julep-ai/node-sdk/compare/v2.4.0...v2.5.0)

### Features

* **api:** api update ([0008708](https://github.com/julep-ai/node-sdk/commit/0008708a268539201889a56ba89f499364ef6aad))


### Chores

* **ci:** only run for pushes and fork pull requests ([4d5368a](https://github.com/julep-ai/node-sdk/commit/4d5368a385a8180e0b663a68245cad24c972c62a))

## 2.4.0 (2025-06-28)

Full Changelog: [v2.3.0...v2.4.0](https://github.com/julep-ai/node-sdk/compare/v2.3.0...v2.4.0)

### Features

* **mcp:** fallback for void-typed methods ([6e9a852](https://github.com/julep-ai/node-sdk/commit/6e9a85217456f2df62a38796afb94c461eaf552a))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([3a13b87](https://github.com/julep-ai/node-sdk/commit/3a13b8704d06ca9e1b41bbc040b2f5ddc0512a69))

## 2.3.0 (2025-06-26)

Full Changelog: [v2.2.0...v2.3.0](https://github.com/julep-ai/node-sdk/compare/v2.2.0...v2.3.0)

### Features

* **api:** api update ([8748803](https://github.com/julep-ai/node-sdk/commit/874880353068276fa80e1e47f3227ab95b1436be))
* **api:** api update ([7147437](https://github.com/julep-ai/node-sdk/commit/71474377345a3e3138beb37756b260844896ceab))
* **api:** api update ([086e945](https://github.com/julep-ai/node-sdk/commit/086e945aeeea21dab47dd04fe0f9090f55c5662c))


### Refactors

* **types:** replace Record with mapped types ([a663fbe](https://github.com/julep-ai/node-sdk/commit/a663fbe46dbe6da2f551d573e23a8d2e3b3c8ed6))

## 2.2.0 (2025-06-19)

Full Changelog: [v2.1.0...v2.2.0](https://github.com/julep-ai/node-sdk/compare/v2.1.0...v2.2.0)

### Features

* **api:** applied suggested fixes ([b5f8a20](https://github.com/julep-ai/node-sdk/commit/b5f8a20a719dcb691aa94e6969d15a28d2455ee0))
* **api:** fixes ([28bf2d2](https://github.com/julep-ai/node-sdk/commit/28bf2d245a1db7ac2e8cb23aac685201ad0ba8a8))

## 2.1.0 (2025-06-17)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/julep-ai/node-sdk/compare/v2.0.0...v2.1.0)

### Features

* **client:** add support for endpoint-specific base URLs ([ac6f8aa](https://github.com/julep-ai/node-sdk/commit/ac6f8aaf9a3079ff1d7c7d784008d22465196658))


### Bug Fixes

* publish script — handle NPM errors correctly ([1549179](https://github.com/julep-ai/node-sdk/commit/1549179cc3a032171f96737f3774f116c3cfaa87))


### Chores

* **ci:** enable for pull requests ([8098403](https://github.com/julep-ai/node-sdk/commit/80984031cd9a82ba57c6d29d9d0bec0aeb619a15))
* **internal:** make base APIResource abstract ([8fffc77](https://github.com/julep-ai/node-sdk/commit/8fffc7791a9a167f4f3fee01a35ea6a4ea71147a))

## 2.0.0 (2025-06-04)

Full Changelog: [v1.71.5...v2.0.0](https://github.com/julep-ai/node-sdk/compare/v1.71.5...v2.0.0)

### Features

* **api:** api update ([438c09b](https://github.com/julep-ai/node-sdk/commit/438c09b9c17666d96f9508b23cb07254f8987123))
* **api:** api update ([edcc09c](https://github.com/julep-ai/node-sdk/commit/edcc09cce32e39e360378317a23011904a3fc338))
* **api:** api update ([c5154b0](https://github.com/julep-ai/node-sdk/commit/c5154b0d43df7837f554741dcaddacd41c891adf))
* **api:** api update ([7661970](https://github.com/julep-ai/node-sdk/commit/7661970c8257a610a25a695f1f4dd06739c8fc44))
* **api:** api update ([e6bcf45](https://github.com/julep-ai/node-sdk/commit/e6bcf4531591ae8c847efbbad4bbf8649a8e78a1))
* **api:** api update ([889138d](https://github.com/julep-ai/node-sdk/commit/889138deb4c292b39e699ece8fb73363a4ebd072))
* **api:** api update ([6532e7a](https://github.com/julep-ai/node-sdk/commit/6532e7a2c4ced6ebafd06353c63e633bb14dfe38))
* **api:** api update ([f3745b7](https://github.com/julep-ai/node-sdk/commit/f3745b732249b75c2b6a106a3cffd3ebb30e45cf))
* **api:** manual updates ([a7894e2](https://github.com/julep-ai/node-sdk/commit/a7894e22d3e42cde307d1892b40d84a9f0d11178))
* **api:** manual updates ([c6d39e0](https://github.com/julep-ai/node-sdk/commit/c6d39e01032b2b10f9527724fad6a37e5b50c5b6))
* **api:** manual updates ([416d225](https://github.com/julep-ai/node-sdk/commit/416d2254090d7596d0d6977a3bb40ac0043d07d7))


### Chores

* **ci:** add timeout thresholds for CI jobs ([8105c78](https://github.com/julep-ai/node-sdk/commit/8105c78c1d2c722a366c2abed7320518431487e6))
* **ci:** bump node version for release workflows ([3699b40](https://github.com/julep-ai/node-sdk/commit/3699b40436bed624f6835f2f6c0b06465c6cf24f))
* **ci:** only use depot for staging repos ([ab0758f](https://github.com/julep-ai/node-sdk/commit/ab0758f4dceeb2673480e428c1e3d71adfc80337))
* **client:** minor internal fixes ([0403a6f](https://github.com/julep-ai/node-sdk/commit/0403a6fbcfbcf579a7b906d8a08adea2ae2051e3))
* **docs:** grammar improvements ([0c3e348](https://github.com/julep-ai/node-sdk/commit/0c3e348d43356f3a0be86c26b1934c939fd39749))
* **docs:** use top-level-await in example snippets ([c9eee6c](https://github.com/julep-ai/node-sdk/commit/c9eee6c0a5d452d0cd806d90564192617f405322))
* improve publish-npm script --latest tag logic ([5805fb3](https://github.com/julep-ai/node-sdk/commit/5805fb37128e0675f87625af405f55dab09a5b7d))
* **internal:** codegen related update ([bca6b03](https://github.com/julep-ai/node-sdk/commit/bca6b03b7360e4b6193dac8b122bd64fca2c45ab))
* **internal:** reduce CI branch coverage ([bad37ea](https://github.com/julep-ai/node-sdk/commit/bad37ea300c757af1fef456302ab210f15977f89))
* **internal:** upload builds and expand CI branch coverage ([e2feb58](https://github.com/julep-ai/node-sdk/commit/e2feb58cee28f5f313cae78a4d995fc28153ff26))
* update SDK settings ([a64ff32](https://github.com/julep-ai/node-sdk/commit/a64ff3289652c6b74421ad99f0d50f054a7beace))


### Documentation

* **readme:** fix typo ([fb227ad](https://github.com/julep-ai/node-sdk/commit/fb227ad1a4891ea5fd57feab31d3af32e6c672eb))

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
