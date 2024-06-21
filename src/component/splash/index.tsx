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

// MARK: React
import { useRef, useState, useEffect } from "react"

// MARK: Typed
import Typed from "typed.js"

// #endregion

// #region -Contributors’

import { Container } from "./styles"

// #endregion

// MARK: -Component
export function Splash() {
	const [animation, setAnimation] = useState(false)
	const [fade, setFade] = useState(false)
	const [finished, setFinished] = useState(false)
	const [lastSplash, setLastSplash] = useState<number>(null!)
	const el = useRef(null!)

	useEffect(() => {
		const typed = new Typed(el.current, {
			onComplete: () => setAnimation(true),
			strings: ["Загрузка", ""],
			startDelay: 0,
			typeSpeed: 40,
			backSpeed: 40,
			backDelay: 80,
			loop: false,
			showCursor: false
		})

		return typed.destroy
	}, [])

	useEffect(() => {
		if (!localStorage.getItem("@Sena:lastTime")) {
			return
		}

		const date = new Date()
		const lastDate = new Date(
			JSON.parse(localStorage.getItem("@Sena:lastTime"))
		)

		let diff = (date.getTime() - lastDate.getTime()) / 1000

		diff /= 60

		setLastSplash(Math.abs(Math.round(diff)))

		if (Math.abs(Math.round(diff)) < 10) {
			setAnimation(true)
		}
	}, [])

	useEffect(() => {
		if (animation) {
			setTimeout(
				() => {
					setFade(true)
				},
				lastSplash > 10 || lastSplash === null ? 600 : 600
			)

			setTimeout(
				() => {
					setFinished(true)
				},
				lastSplash > 10 || lastSplash === null ? 900 : 800
			)

			if (lastSplash > 10 || lastSplash === null) {
				localStorage.setItem("@Sena:lastTime", JSON.stringify(new Date()))
			}
		}
	}, [animation])

	return finished ? null : (
		<Container className="splash" style={{ opacity: fade ? 0 : 1 }}>
			<span
				className={
					animation
						? `${lastSplash > 10 || lastSplash === null ? "zoom" : "rotate"}`
						: ""
				}
			>
				{"<"}
				{(lastSplash > 10 || lastSplash === null) && <span ref={el} />}
				{"/>"}
			</span>
		</Container>
	)
}
