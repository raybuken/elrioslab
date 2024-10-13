

export const getTranslationMessages = async(context, name) => {
    let currentPageMessages = {}
    let common = {}
    
    try {
        currentPageMessages = (await import(`../translations/${context.locale}/${name}.json`)).default
    } catch(error) {
        console.warn(error)
        currentPageMessages = (await import(`../translations/${context.defaultLocale}/${name}.json`)).default
    } 

    try {
        common = (await import(`../translations/${context.locale}/common.json`)).default
    }catch(error) {
        console.warn(error)
        common = (await import(`../translations/${context.defaultLocale}/common.json`)).default
    }
    
    return {
        ...currentPageMessages,
        ...common
    }
}