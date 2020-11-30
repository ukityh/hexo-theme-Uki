const toTopBtn = document.getElementById('to-top')
toTopBtn.addEventListener('click', function () {
	// 浏览器不支持 requestAnimationFrame ，用 setTimeout 代替
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function (cb) {
			setTimeout(cb, 1000)
		}
	}
	window.requestAnimationFrame(toTop)
})
function toTop() {
	// 当前位置距离顶部的距离.有些浏览器使用 document.body.scrollTop 获取滚动条高度（比如旧版的Edge）
	const currentPosition = document.documentElement.scrollTop || document.body.scrollTop
	const position = Math.floor(currentPosition / 1.3)
	if (currentPosition <= 0) return
	window.scrollTo(0, position)
	window.requestAnimationFrame(toTop)
}