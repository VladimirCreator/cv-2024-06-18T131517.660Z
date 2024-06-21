/* Copyright 2024 Vladimir Leonidovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Props = {
	contributor: any
	dependencies: any
	"key-0": any
}

/** Returns the object.
 *
 * @author Vladimir Leonidovich
 * @version 0.1.0
 * @since 0.1.0
 */
export function useObject(full: boolean = false): Readonly<Props> {
	const object = JSON.parse(process.env.NEXT_PUBLIC_STATIC_PROPS ?? "{}")

	// Get the first object.
	const key = Object.keys(object).at(0)!

	return full ? object : object[key]
}
