export function inputBorderClassnames(invalid: boolean = false) {
  return invalid ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500" :
    "focus:ring-indigo-500 focus:border-indigo-500 border-gray-300";
}

export function joinClassnames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
