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

// #region -Dependencies

// MARK: Next: Link
import Link from "next/link"
// MARK: Next: Router
import { useRouter } from "next/router"

// #endregion

// #region -Contributors’
// #endregion

type Props = any

// MARK: -Component
export function NavLink(props: Readonly<Props>) {
	const { href, label, onClick } = props
	const router = useRouter()
	const path = router.asPath

	return (
		<Link href={href} prefetch={false} passHref>
			<button
				type="button"
				className={path === href ? "active" : ""}
				onClick={onClick}
			>
				{label}
				<span className="background" />
			</button>
		</Link>
	)
}
