export
const getObjects = async (destination) => {
    const options = {
        method: 'GET'
    }

    const result = await fetch(apiUrl + destination, options);
    if (result.ok) {
        return await result.json()
    }
    return []
}

export const getOrderNumber = (order) => {
    const number = order.orderId
    return number.toString().padStart(6, '0')

}
export const apiUrl = "http://localhost:5099/api/";