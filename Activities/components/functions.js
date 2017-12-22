import interests from './../json/interests.json';
import users from './../json/users.json';
import images from './../json/images.json';
import posts from './../json/posts.json';
import stats from './../json/stats.json';
export function getImageByName(name){
  return images.avatar;
}
export function getUserByName(name){
  var map = users.map(function(item){
       return {
         login: item.login,
         avatar: item.avatar,
         fullname: item.fullname,
         interests: item.interests
       }
  });
  for (let usr of map) {
      if (usr.login==name){
          return usr;
      }
  }
}
export function getHoursState(name,interest){
  var map = stats.map(function(item){
       return {
         login: item.login,
         interestHours: item.interestHours
       }
  });
  for (let stat of map) {
      if (stat.login==name){
          for (let hours of stat.interestHours){
            if (hours.name==interest){
              return hours.state;
            }
          }
      }
  }
}
export function getStatsByName(name){
  var map = stats.map(function(item){
       return {
         login: item.login,
         stats: item.stats
       }
  });
  for (let stat of map) {
      if (stat.login==name){
          return stat;
      }
  }
}
export function getInterestByName(name){
  var map = interests.map(function(item) {
      return {
        alias: item.alias,
        name: item.name,
        icon: item.icon,
        color: item.color
      };
  });
  for (let interest of map) {
      if (interest.alias==name){
        return interest;
      }
  }
}
export function getInterestColorByName(name){
  var map = interests.map(function(item) {
      return {
        alias: item.alias,
        name: item.name,
        icon: item.icon,
        color: item.color
      };
  });
  for (let interest of map) {
      if (interest.alias==name){
        return interest.color;
      }
  }
}
export function getInterestsByNames(names){
  var map = interests.map(function(item) {
      return {
        alias: item.alias,
        name: item.name,
        icon: item.icon,
        color: item.color
      };
  });
  var intrs=[];
  for (let interest of map) {
      if (names.indexOf(interest.alias)>-1){
        intrs.push(interest);
      }
  }
  return intrs;
}
  export function getAllPosts(){
  var map = interests.map(function(item) {
      return {
        id: item.id,
        title: item.title,
        interest:item.interest,
        text: item.text,
        img: item.img

      };
  });
  return map;
}

