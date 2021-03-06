/**
* @typedef JestRunConfig
* @property {number} estimatedTime - The amount of time the test run is expected to take
* @property {boolean} showStatus - Should the test run status be shown?
*/

/**
* @typedef JestTestCaseResult
* @property {string[]} ancestorTitles - Array of titles for the tests's parent `describe` blocks
* @property {number} duration - The number of milliseconds it took to execute the test
* @property {string[]} failureMessages - A list of failure messages (e.g. stack trace for failed test) for the test if it failed
* @property {string} fullName - The full name. This includes the parent `describe` blocks' names
* @property {string|null} location - The location of the test case if applicable
* @property {number} numPassingAsserts - The number of assertions in the test case that passed
* @property {string} status - The status of the test case, can be passed, failed, skipped
* @property {string} title - The title of the test case (i.e. The string passed as the first arguemnt of the `it` block)
*/

/**
* @typedef JestTestSuitePerfStats
* @property {number} end - Timestamp taken at the end of the test suite execution
* @property {number} start - Timestamp taken at the start of the test suite execution
*/

/**
* @typedef JestTestSuiteSnapshotStats
* @property {number} added - A count of the number of snapshots added while executing the test cases
* @property {boolean} fileDeleted - Was a snapshot file deleted?
* @property {number} matched - A count of the number of times a snapshot was used while executing the test cases
* @property {number} unchecked - A count of the number of times a value in a snapshot wasn't checked against while executing the test cases
* @property {number} unmatched - A count of the number of times a snapshot failed while executing the test cases
* @property {number} updated - A count of the number of snapshots updated while executing the test cases
* @property {string[]} uncheckedKeys - An Array of the snapshot values that weren't checked while executing the test cases
*/

/**
* @typedef JestTestSuiteResult
* @property {string[]} console -
* @property {string|null} failureMessage - Message shown to the user on the test suite failing if applicable
* @property {number} numFailingTests - The number of failed test cases for the test suite
* @property {number} numPassingTests - The number of passed test cases for the test suite
* @property {number} numPendingTests - The number of tests still to be executed, this will happen when async functions aren't handled correctly in test cases
* @property {number} numTodoTests - The number of tests not implemented (i.e. instances of `test.todo()`)
* @property {JestTestSuitePerfStats} perfStats - Timestamps taken at the start and end of the test suite execution
* @property {JestTestSuiteSnapshotStats} snapshot - Information on the snapshots added, updated, used during the test suite execution
* @property {string} testFilePath - The absolute path to the test suite's file
* @property {JestTestCaseResult[]} testResults - Individual test case results
* @property {Object} sourceMaps - Object containing source map information
* @property {boolean} skipped - Was the test suite skipped?
* @property {boolean} leaks - Did the test suite have any mock leaks?
*/

/**
* @typedef JestTestRunSnapshotStats
* @property {number} added - A count of the number of snapshots added during the test run
* @property {boolean} didUpdate - Were any snapshots updated during the test run?
* @property {boolean} failure - Did any tests fail due to snapshot mismatches?
* @property {number} filesAdded - A count of the number of snapshot files added during the test run
* @property {number} filesRemoved - A count of the number of snapshot files deleted during the test run
* @property {number} filesUnmatched - A count of the number of snapshot files not matched against during the test run
* @property {number} filesUpdated - A count of the number of snapshot files updated during the test run
* @property {number} matched - A count of the number snapshots matched against during the test run
* @property {number} total - A count of the number of snapshots used during the test run
* @property {number} unchecked - A count of the number of snapshot keys not matched against during the test run
* @property {Object[]} uncheckedKeysByFile - An Array of objects that show the keys not matched against on a file level
* @property {number} unmatched - A count of the number of snapshots not used during the test run
* @property {number} updated - A count of the number of snapshots updated during the test run
*/

/**
* @typedef JestTestRunResult
* @property {number} numFailedTestSuites - A count of the test suites run that failed
* @property {number} numFailedTests - A count of the test cases run that failed
* @property {number} numPassedTestSuites - A count of the test suites run that passed
* @property {number} numPassedTests - A count of the test cases run that passed
* @property {number} numPendingTestSuites - A count of the tests suites that are _pending_ (i.e. async not handled correctly)
* @property {number} numPendingTests - A count of the test cases that are _pending_
* @property {number} numRuntimeErrorTestSuites - A count of the test suites that failed due to a runtimeError being raised
* @property {number} numTodoTests - A count of the test cases not implemented (i.e. instances of `test.todo`)
* @property {number} numTotalTestSuites - A count of the test suites that were included in the run
* @property {number} numTotalTests - A count of the test cases that were included in the run
* @property {string[]} openHandles - An Array of test suites that have not been closed but have been executed (i.e. a timeout was set on the test suite/test case)
* @property {JestTestRunSnapshotStats} snapshot - Statistics on the snapshots affected by the test run
* @property {number} startTime - A timestamp of when the test run began
* @property {boolean} success - Was the test run a success
* @property {JestTestSuiteResult[]} testResults - Individual test suite results
* @property {boolean} wasInterrupted - Was the test run stopped by the user?
*/

/**
* @typedef JestTestSuiteContext
*/

/**
* @typedef JestTestSuiteContextConfigHaste
* @property {boolean} computeSha1 -
* @property {string[]} providesModuleNodeModules -
*/

/**
* @typedef JestTestSuiteContextConfig
* @property {boolean} automock - Is the test suite using automock?
* @property {boolean} browser -
* @property {boolean} cache - Is the test suite using a cache?
* @property {string} cacheDirectory - The location of the cache for the test suite
* @property {boolean} clearMocks - Should the mocks be cleared?
* @property {string[]} coveragePathIgnorePatterns - An Array of paths to not collect coverage for the files in them
* @property {string} cwd - The current working directory of the test suite
* @property {function|null} dependencyExtractor -
* @property {boolean} detectLeaks - Should leaked mocks be deteched and reported?
* @property {boolean} detectOpenHandles - Should tests that declare long timeouts be detected and reported?
* @property {boolean} errorOnDeprecated - Should deprecated function raise an error?
* @property {function|null} filter -
* @property {string[]} forceCoverageMatch -
* @property {function|null} globalSetup - Function to call when setting up test suite
* @property {function|null} globalTeardown - Function to call when tearing down test suite
* @property {Object} globals - Global variables available within test suite
* @property {JestTestSuiteConfigHaste} haste - Haste configuration
* @property {string[]} moduleDirectories - An Array of directory paths where modules can be found
* @property {string[]} moduleFileExtensions - An Array of file extensions that modules can have
* @property {Object} moduleNameMapper - A mapping of module names to module code, should you need to manually override these
* @property {string[]} modulePathIgnorePatterns - An Array of path patterns to ignore when loading modules
* @property {string} name - The unique name of the test suite
* @property {string} prettierPath - The path to the prettier module
* @property {boolean} resetMocks - Should mocks be reset at the end of the test suite?
* @property {boolean} resetModules - Should modules be reset at the end of the test suite?
* @property {function|null} resolver - Function for resolving modules
* @property {boolean} restoreMocks - Should mocks be restored at the end of the test suite?
* @property {string} rootDir - Root directory of the package
* @property {string[]} roots - An Array of root directories for the test runner to look in
* @property {string} runner - The test runner being used during the test run
* @property {string[]} setupFiles - Files to run before the environment is setup
* @property {string[]} setupFilesAfterEnv - Files to run after the environment is setup
* @property {boolean} skipFilter - Should the filter be skipped?
* @property {string[]} snapshotSerializers - An Array of serialiser packages to use when creating snapshots
* @property {string} testEnvironment - The path to the test environment file being used when running the test suite
* @property {Object} testEnvironmentOptions - Object to pass to the test environment's constructor
* @property {boolean} testLocationInResults - Should the location of the test suite be included in the results objects?
* @property {string[]} testMatch - Path matchers to use when collecting test suites
* @property {string[]} testPathIgnorePatterns - Paths to not look for test suites in
* @property {string[]} testRegex - Regex to use when finding tests to run
* @property {string} testRunner - Path to the test runner file
* @property {string} testUrl - The URL for the test runner to load
* @property {string} timers - The type of timers being used (real or fake)
* @property {string[][]} transform - An Array of Tuples on how to transform source files before running tests (such as used with Babel)
* @property {string[]} transformIgnorePatterns - An Array of paths to ignore when transforming source files
* @property {string[]} watchPathIgnorePatterns - An Array of paths to ignore when watching for changes (so tests can be re-run)
*/

/**
* @typedef JestTestSuiteContextHasteFS
* @property {string} _rootDir - The root directory of the package
* @property {Object} _files -
*/

/**
* @typedef JestTestSuiteContextModuleMap
* @property {string[]} duplicates - An Array of duplicate modules
* @property {Object[][]} map - A map of package and path to package.json files
* @property {string[]} mocks - An Array of mocked modules
* @property {string} rootDir - The root directory of the package
*/

/**
* @typedef JestTestSuiteContextResolveOptions
* @property {boolean} browser -
* @property {string[]} extensions - Extensions to use when resolving modules
* @property {boolean} hasCoreModules - Should core modules be used?
* @property {string[]} moduleDirectories - Directories to load modules from
* @property {function|null} moduleNameMapper - Function to map module names
* @property {function|null} resolver - Function to resolve modules with
* @property {string} rootDir - The root directory for package
*/

/**
* @typedef JestTestSuiteContextResolver
* @property {JestTestSuiteContextResolvedOptions} _options - Options passed to the resolver
* @property {boolean} _supportsNativePlatform - Does the resolver support the native platform?
* @property {JestTestSuiteContextModuleMap} _moduleMap - Map of modules used when resolving
* @property {Object} _moduleIDCache -
* @property {Object} _moduleNameCache -
* @property {Object} _modulePathCache -
*/

/**
* @typedef JestTestSuiteContext
* @property {JestTestSuiteContextConfig} config - Config options used when running test suite
* @property {JestTestSuiteContextHasteFS} hasteFS - HasteFS set up for test suite
* @property {JestTestSuiteContextModuleMap} moduleMap - Module mapping config used for test suite
* @property {JestTestSuiteContextResolver} resolver - Resolver config used for test suite
*/

/**
* @typedef JestTestSuiteRunConfig
* @property {JestTestSuiteContext} context - The context that the test suite if being executed within
* @property {string} path - The path to the test suite
*/
