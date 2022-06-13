"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2257],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={id:"gator",title:"The gator CLI"},l=void 0,p={unversionedId:"gator",id:"gator",title:"The gator CLI",description:"The gator CLI is a tool for evaluating Gatekeeper ConstraintTemplates and",source:"@site/docs/gator.md",sourceDirName:".",slug:"/gator",permalink:"/gatekeeper/website/docs/next/gator",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/gator.md",tags:[],version:"current",frontMatter:{id:"gator",title:"The gator CLI"},sidebar:"docs",previous:{title:"External Data",permalink:"/gatekeeper/website/docs/next/externaldata"},next:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/next/workload-resources"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"The <code>gator test</code> subcommand",id:"the-gator-test-subcommand",level:2},{value:"Usage",id:"usage",level:3},{value:"Specifying inputs",id:"specifying-inputs",level:4},{value:"Exit Codes",id:"exit-codes",level:4},{value:"Enforcement Actions",id:"enforcement-actions",level:5},{value:"Output Formatting",id:"output-formatting",level:4},{value:"The <code>gator verify</code> subcommand",id:"the-gator-verify-subcommand",level:2},{value:"Writing Test Suites",id:"writing-test-suites",level:3},{value:"Suites",id:"suites",level:3},{value:"Tests",id:"tests",level:3},{value:"Cases",id:"cases",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Gotchas",id:"gotchas",level:2},{value:"Duplicate violation messages",id:"duplicate-violation-messages",level:3},{value:"Matching is case-sensitive",id:"matching-is-case-sensitive",level:3},{value:"Referential constraints and Namespace-scoped resources",id:"referential-constraints-and-namespace-scoped-resources",level:3},{value:"Platform Compatibility",id:"platform-compatibility",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," CLI is a tool for evaluating Gatekeeper ConstraintTemplates and\nConstraints in a local environment."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"gator"),", you may either\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/releases"},"download the binary"),"\nrelevant to your system or build it directly from source."),(0,o.kt)("p",null,"To build from source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get github.com/open-policy-agent/gatekeeper/cmd/gator\n")),(0,o.kt)("h2",{id:"the-gator-test-subcommand"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gator test")," subcommand"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," allows users to test a set of Kubernetes objects against a set of\nTemplates and Constraints.  The command returns violations when found and\ncommunicates success or failure via its exit status."),(0,o.kt)("p",null,"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," command was first called ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test"),".  These names\nwere changed to better align ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," with other projects in the\nopen-policy-agent space."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"specifying-inputs"},"Specifying inputs"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," supports inputs through the ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," flag and via stdin.  The\ntwo methods of input can be in combination or individually."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," flag can specify a single file or a directory.  If a file is\nspecified, that file must end in one of the following extensions: ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},".yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".yml"),".  Directories will be walked, and any files of extensions other\nthan the aforementioned three will be skipped."),(0,o.kt)("p",null,"For example, to verify a manifest (piped via stdin) against a folder of policies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat my-manifest.yaml | gator test --filename=template-and-constraints/\n")),(0,o.kt)("p",null,"Or you can specify both as flags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator test -f=my-manifest.yaml -f=templates-and-constraints/\n")),(0,o.kt)("h4",{id:"exit-codes"},"Exit Codes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," exit status when the objects, Templates, and\nConstraints are successfully ingested, no errors occur during evaluation, and\nno violations are found."),(0,o.kt)("p",null,"An error during evaluation, for example a failure to read a file, will result\nin a ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit status with an error message printed to stderr."),(0,o.kt)("p",null,"Policy violations will generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit status as well, but violation\ninformation will be printed to stdout."),(0,o.kt)("h5",{id:"enforcement-actions"},"Enforcement Actions"),(0,o.kt)("p",null,"While violation data will always be returned when an object is found to be\nviolating a Constraint, the exit status can vary.  A constraint with\n",(0,o.kt)("inlineCode",{parentName:"p"},'spec.enforcementAction: ""')," or ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.enforcementAction: deny")," will produce a\n",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit code, but other enforcement actions like ",(0,o.kt)("inlineCode",{parentName:"p"},"dryrun")," will not.  This is\nmeant to make the exit code of ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," consistent with rejection of the object by\nGatekeeper's webhook.  A Constraint set to ",(0,o.kt)("inlineCode",{parentName:"p"},"warn")," would not trigger a rejection\nin the webhook, but ",(0,o.kt)("em",{parentName:"p"},"would")," produce a violation message.  The same is true for\nthat constraint when used in ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test"),"."),(0,o.kt)("h4",{id:"output-formatting"},"Output Formatting"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," supports a ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," flag that allows the user to specify a\nstructured data format for the violation data.  This information is printed to\nstdout."),(0,o.kt)("p",null,"The allowed values are ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),", specified like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator test --filename=manifests-and-policies/ --output=json\n")),(0,o.kt)("h2",{id:"the-gator-verify-subcommand"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gator verify")," subcommand"),(0,o.kt)("h3",{id:"writing-test-suites"},"Writing Test Suites"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," organizes tests into three levels: Suites, Tests, and Cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Suite is a file which defines Tests."),(0,o.kt)("li",{parentName:"ul"},"A Test declares a ConstraintTemplate, a Constraint, and Cases to test the\nConstraint."),(0,o.kt)("li",{parentName:"ul"},"A Case defines an object to validate and whether the object is expected to\npass validation.")),(0,o.kt)("p",null,"Any file paths declared in a Suite are assumed to be relative to the Suite\nitself. Absolute paths are not allowed. Thus, it is possible to move around a\ndirectory containing a Suite, and the files it uses for tests."),(0,o.kt)("h3",{id:"suites"},"Suites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/blob/8765ec11c12a523688ed77485c7a458df84266d6/library/general/allowedrepos/suite.yaml"},"An example Suite file"),"."),(0,o.kt)("p",null,"To be valid, a Suite file must declare:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Suite\napiVersion: test.gatekeeper.sh/v1alpha1\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," silently ignores files which do not declare these. A Suite may\ndeclare multiple Tests, each containing different Templates and Constraints.\nEach Test in a Suite is independent."),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"Each Suite contains a list of Tests under the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," field."),(0,o.kt)("p",null,"A Test compiles a ConstraintTemplate, and instantiates a Constraint for the\nConstraintTemplate. It is an error for the Constraint to have a different type\nthan that defined in the ConstraintTemplate spec.crd.spec.names.kind, or for the\nConstraintTemplate to not compile."),(0,o.kt)("h3",{id:"cases"},"Cases"),(0,o.kt)("p",null,"Each Test contains a list of Cases under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cases")," field."),(0,o.kt)("p",null,"A Case validates an object against a Constraint. The case may specify that the\nobject is expected to pass or fail validation, and may make assertions about\nthe returned violations (if any)."),(0,o.kt)("p",null,"A Case must specify ",(0,o.kt)("inlineCode",{parentName:"p"},"assertions")," and whether it expects violations. The simplest\nway to declare this is:"),(0,o.kt)("p",null,"The Case expects at least one violation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: yes\n")),(0,o.kt)("p",null,"The Case expects no violations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: no\n")),(0,o.kt)("p",null,"Assertions contain the following fields, acting as conditions for each assertion\nto check."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"violations"),' is either "yes", "no", or a non-negative integer.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If "yes", at least one violation must otherwise match the assertion.'),(0,o.kt)("li",{parentName:"ul"},'If "no", then no violation messages must otherwise match the assertion.'),(0,o.kt)("li",{parentName:"ul"},'If a nonnegative integer, then exactly that many violations must match.\nDefaults to "yes".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," matches violations containing the exact string specified. ",(0,o.kt)("inlineCode",{parentName:"li"},"message"),"\nis case-sensitive. If not specified or explicitly set to empty string, all\nmessages returned by the Constraint are considered matching.")),(0,o.kt)("p",null,"A Case may specify multiple assertions. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: samples/repo-must-be-openpolicyagent/disallowed_both.yaml\n    assertions:\n    - violations: 2\n    - message: initContainer\n      violations: 1\n    - message: container\n      violations: 1\n")),(0,o.kt)("p",null,"This Case specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are exactly two violations."),(0,o.kt)("li",{parentName:"ul"},'There is exactly one violation containing "initContainer".'),(0,o.kt)("li",{parentName:"ul"},'There is exactly one violation containing "container".')),(0,o.kt)("p",null,"It is valid to assert that no violations match a specified message. For example,\nthe below is valid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- violations: yes\n- violations: no\n  message: foobar\n")),(0,o.kt)("p",null,'This Case specifies that there is at least one violation, and no violations\ncontain the string "foobar".'),(0,o.kt)("p",null,"A Case may specify ",(0,o.kt)("inlineCode",{parentName:"p"},"inventory"),", which is a list of paths to files containing\nKubernetes objects to put in ",(0,o.kt)("inlineCode",{parentName:"p"},"data.inventory")," for testing referential constraints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"inventory:\n- samples/data_objects.yaml\n")),(0,o.kt)("p",null,"More examples of working ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," suites are available in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/tree/master/library"},"gatekeeper-library"),"\nrepository."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,"To run a specific suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator verify suite.yaml\n")),(0,o.kt)("p",null,"To run all suites in the current directory and all child directories\nrecursively"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator verify ./...\n")),(0,o.kt)("p",null,"To only run tests whose full names contain a match for a regular expression, use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator verify path/to/suites/... --run "disallowed"\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify --help")," for more information."),(0,o.kt)("h2",{id:"gotchas"},"Gotchas"),(0,o.kt)("h3",{id:"duplicate-violation-messages"},"Duplicate violation messages"),(0,o.kt)("p",null,"Rego de-duplicates identical violation messages. If you want to be sure that\na test returns multiple violations, use a unique message for each violation.\nOtherwise, if you specify an exact number of violations, the test may fail."),(0,o.kt)("h3",{id:"matching-is-case-sensitive"},"Matching is case-sensitive"),(0,o.kt)("p",null,"Message declarations are case-sensitive. If a test fails, check that the\nexpected message's capitalization exactly matches the one in the template."),(0,o.kt)("h3",{id:"referential-constraints-and-namespace-scoped-resources"},"Referential constraints and Namespace-scoped resources"),(0,o.kt)("p",null,"Gator cannot determine if a type is Namespace-scoped or not, so it does not\nassign objects to the default Namespace automatically. Always specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.namespace")," for Namespace-scoped objects to prevent test failures, or\nto keep from specifying templates which will fail in a real cluster."),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform Compatibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator")," is only automatically tested on Linux for each commit. If you want to\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," on other systems, let us know by replying to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues/1655"},"this issue"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," has been manually tested on Windows and works as of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/commit/b3ed94406583c85f3102c54a32f362d27f76da96"},"this commit"),".\nContinued functionality is not guaranteed."),(0,o.kt)("p",null,"File paths which include backslashes are not portable, so suites using such\npaths will not work as intended on Windows."))}m.isMDXComponent=!0}}]);