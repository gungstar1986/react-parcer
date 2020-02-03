import React from "react";
import "./Redactor.css"

const Redactor = ({data, checkboxEdit, nameOverrideEdit, categoryOverrideEdit, tvGidEdit}) => {

    const element = data.map((item, id) => {
        return (
            <div key={id} className={"redactor-item"}>

                name: <input value={item.name}
                             readOnly={true}
                             type="text"/>
                nameOverride: <input onClick={(e) => e.currentTarget.select()}
                                     onChange={(e) => nameOverrideEdit(e.currentTarget.value, item.id)}
                                     value={item.nameOverride}
                                     type="text"/>
                tvgId: <input onClick={(e) => e.currentTarget.select()}
                              onChange={(e) => tvGidEdit(e.currentTarget.value, item.id)}
                              value={item.tvgId}
                              type="text"/>
                enabled: <input onChange={() => checkboxEdit(!item.enabled, item.id)}
                                type={"checkbox"}
                                checked={item.enabled}/>
                category: <input value={item.category}
                                 readOnly={true}
                                 type="text"/>
                categoryOverride: <input onClick={(e) => e.currentTarget.select()}
                                         onChange={(e) => categoryOverrideEdit(e.currentTarget.value, item.id)}
                                         value={item.categoryOverride}
                                         type="text"/>

            </div>
        )
    });


    return (
        <div className={"redactor-main-container"}>
            {element}
        </div>
    )
};

export default Redactor;
