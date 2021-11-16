export const helper = {
    cdn(img: string) {
        return `https://iotexproject.iotex.io/iotex-website-v3/main/public/${img}`;
    },
};

export function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
