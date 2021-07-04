let obj = {
  profile: {
    name: {
      firstname: "sidharth",
      lastname: "rehlan",
    },
    hobbies: ["playing"],
  },
};

const getValue = (obj, keys) => {
  let newObj = obj;
  let keysArr = keys.split(".");

  for (let i = 0; i < keysArr.length; i++) {
    if (typeof newObj[keysArr[i]] === "undefined") {
      return -1;
    } else if (i === keysArr.length - 1) {
      return newObj[keysArr[i]];
    } else {
      newObj = newObj[keysArr[i]];
    }
  }
};

console.log("before...", obj);
console.log(getValue(obj, "profile.name"));
console.log("after...", obj);
