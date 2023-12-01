export const formatDate = (time: any) => {
	const date = new Date(time)
	const year = date.getFullYear()
	const m = date.getMonth() + 1
	const month = m < 10 ? `0${m}` : m
	const d = date.getDate()
	const day = d < 10 ? `0${d}` : d
	const h = date.getHours()
	const hour = h < 10 ? `0${h}` : h
	const ms = date.getMinutes()
	const minute = ms < 10 ? `0${ms}` : ms
	const s = date.getSeconds()
	const second = s < 10 ? `0${s}` : s
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
