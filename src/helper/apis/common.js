import $ajax from '../ajax'

export default {
  getPositionByLocation(data) {
    return $ajax.get('https://apis.map.qq.com/ws/geocoder/v1/', data)
  }
}
