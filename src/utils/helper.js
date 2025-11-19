export function truncate(text, limit = 150){
    const textSplit = text.split(" ");
    if(textSplit.length < limit) return text;

    return textSplit.slice(0, limit).join(" ") + " ...";
}