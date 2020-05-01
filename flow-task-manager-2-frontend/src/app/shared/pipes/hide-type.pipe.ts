import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'hideType'})
export class HideTypePipe implements PipeTransform {
  transform(taskTypes) {
    let index = taskTypes.findIndex((taskType) => taskType.key === 'All');
    taskTypes.splice(index, 1);
    return taskTypes;
  }
}