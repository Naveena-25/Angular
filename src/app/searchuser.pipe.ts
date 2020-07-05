import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {

  name: 'searchuser';
  transform(users: any[], searchText: any, fieldName: string): unknown {

    if (!users) {
      return [];
    }

    if (!searchText) {
      return users;
    }

    console.log((typeof (searchText)));
    if (typeof (searchText) == 'string') {
      searchText = searchText.toLowerCase();
    }
    return users.filter(book => {
      if (users && users[fieldName]) {
        
        if(isNaN(searchText)) {
          return users[fieldName].toLowerCase().includes(searchText);
        } else {
          return users[fieldName].toString().includes(searchText);
        }
      }
    });
  }
}
