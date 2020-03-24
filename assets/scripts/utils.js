export const shuffleArray = (a) => {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}

export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min
}

export const lineEq = (y2, y1, x2, x1, currentVal) => {
	var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1
	return m * currentVal + b
}

export const lerp = (a,b,n) => (1 - n) * a + n * b

export const distance = (x1,x2,y1,y2) => {
	var a = x1 - x2
	var b = y1 - y2
	return Math.hypot(a,b)
}
