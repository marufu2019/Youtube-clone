export const API_KEY = 'AIzaSyBQxGqLuOeycbE7ZeQ0J_4aTnEIumnliV8';
// export const API_KEY = 'AIzaSyDfgvrfKr-GlLIiIYOR-xGhVncMqGSvt2k';
// export const API_KEY = 'AIzaSyBQxGqLuOeycbE7ZeQ0J_4aTnEIumnliV8';


export const value_converter = (value) => {
    if (value>= 1000000) {
        return Math.floor(value/1000000)+ "M"
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+ "K"
    }
    else{
        return value;
    }
}