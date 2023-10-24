
/**
 * A test library that depends on another in a
 * monorepo.
 *
 * @packageDocumentation
 */


import { foo } from '@typedoc-bug-report/lib-project';

/** A better version of {@link foo} */
export const betterFoo = 'Test 2! ' + foo;

