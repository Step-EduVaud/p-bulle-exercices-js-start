export function headsOrTails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() > 0.5)
        resolve("Pile")
      else
        resolve("Face")
    }, 1000)
  })
}
