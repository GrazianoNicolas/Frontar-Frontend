export type LoadStatus='in_transit' | 'customs' |'delivered';

export type Place={
    city:string,
    country:string
}

export type Load={
    id:string,
    mic:string,
    company:string,
    origin:Place,
    destination:Place,
    location:string,
    status:LoadStatus,
    crts:string[],
    products:number
}
export type LoadsView='cards'|'rows';

export type LoadsParams ={
    page:number,
    limit:number
}

export type LoadsPage={
  items:Load[],
  total:number
}