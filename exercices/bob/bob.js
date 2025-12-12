//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  msg = message.trim();

  if (msg.endsWith('?') && !/[a-z]/.test(msg) && /[A-Z]/.test(msg))
      return "Calm down, I know what I'm doing!"
  else if (msg.endsWith('?'))
    return 'Sure.'
  else if (!/[a-z]/.test(msg) && /[A-Z]/.test(msg))
    return 'Whoa, chill out!'
  else if (msg === "")
    return 'Fine. Be that way!'
  else 
    return 'Whatever.'
};
