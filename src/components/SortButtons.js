import React from "react";

export const SortButtons = ({notes, updateNotes, applySort}) => {

    const alphabetSort = () => {
        const list = [...notes]

        if (list){
            try{
                applySort(
                    list.sort(function(a, b){
                        if(a.taskName < b.taskName) { return -1; }
                        if(a.taskName > b.taskName) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
        }
    }

    const dateDownSort = () => {
        const list = [...notes]

        if (list){
            try{
                applySort(
                    list.sort(function(a, b){
                        if(a.taskDate < b.taskDate) { return -1; }
                        if(a.taskDate > b.taskDate) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
        }
    }

    const dateUpSort = () => {
        const list = [...notes]

        if (list){
            try{
                applySort(
                    list.sort(function(a, b){
                        if(a.taskDate > b.taskDate) { return -1; }
                        if(a.taskDate < b.taskDate) { return 1; }
                        return 0;
                    })
                )
            }catch(e){}
        }
    }

    return  <>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>alphabetSort()}>ABC</button>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>dateUpSort()}>Date ↓</button>
    <button type="button" class="btn btn-outline-primary sort" onClick={()=>dateDownSort()}>Date ↑</button>
  </>
}