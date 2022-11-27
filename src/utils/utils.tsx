/* ClassNames utility for merging classes into a string */
export function classNames(...classes: any){
    return classes.filter(Boolean).join(' ')
}