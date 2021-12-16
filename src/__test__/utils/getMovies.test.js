import axios from 'axios';

xdescribe('Call API Movies', () => {
    test('Get 20 Movies', () => {
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/popular?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=${1}`
          }).then(response=>{
              expect(response.data.results.length).toEqual(20)
          })

    })
})