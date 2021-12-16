import React from "react";

export const SortButtons = ({notes, updateNotes, applySort}) => {

    const alphabetSort = () => {
        console.log('Зашли')
        const list = [...notes]

        if (list){
            try{
                console.log(list)
                applySort(
                    list.sort(function(a, b){
                        if(a.taskName < b.taskName) { return -1; }
                        if(a.taskName > b.taskName) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
            console.log(list)
        }
    }

    const dateDownSort = () => {
        console.log('Зашли')
        const list = [...notes]

        if (list){
            try{
                console.log(list)
                applySort(
                    list.sort(function(a, b){
                        if(a.taskDate < b.taskDate) { return -1; }
                        if(a.taskDate > b.taskDate) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
            console.log(list)
        }
    }

    const dateUpSort = () => {
        console.log('Зашли')
        const list = [...notes]

        if (list){
            try{
                console.log(list)
                applySort(
                    list.sort(function(a, b){
                        if(a.taskDate > b.taskDate) { return -1; }
                        if(a.taskDate < b.taskDate) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
            console.log(list)
        }
    }

    return  <>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>alphabetSort()}>ABC</button>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>dateUpSort()}>Date ↓</button>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>dateDownSort()}>Date ↑</button>
  </>
}