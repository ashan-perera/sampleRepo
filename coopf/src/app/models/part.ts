export class Part {

    id
    name
    description
    inactiveReason
    createdBy
    createdDateTime
    modifiedBy
    modifiedDateTime
    isDeleted
    isActive

    public mapData(data: any) {
        let _data = [];

        data.filter(elem => {
            try {
                _data.push({
                    id: elem.id,
                    name: elem.name,
                    description: elem.description,
                    inactiveReason: elem.inactiveReason,
                    createdBy: elem.createdBy,
                    createdDateTime: elem.createdDateTime,
                    modifiedBy: elem.modifiedBy,
                    modifiedDateTime: elem.modifiedDateTime,
                    isDeleted: elem.isDeleted,
                })
            } catch (error) {

            }
        });


        return _data;
    }

}