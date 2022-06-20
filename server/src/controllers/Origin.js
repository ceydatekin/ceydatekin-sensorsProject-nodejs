const httpStatus = require('http-status');
const originServices = require("../services/OriginService");


class Origin{

    getOne (request, response, next){
        //request.params Url üzeirndeki isteği döndürür
        if(!request.params?.id){
            return response.status(httpStatus.BAD_REQUEST).send({
                message : "EKSİK ID BİLGİSİ",
            })
        }

        originServices.list({_id : request.params.id}).then(oneOrigin => {
            if (!oneOrigin) return next(new ApiError("Böyle bir kayıt bulunmamaktadır", 404));
            response.status(httpStatus.OK).send(oneOrigin);

        }).catch((e) => next( new ApiError(e?.message)));
    }

    index (req, res) {
        originServices.list().then(response => {
            if(response.length == 0) {
                res.status(httpStatus.NOT_FOUND).send({message : "Hiçbir Ana Nokta kaydı bulunamadı !"});
            } else {
                res.status(httpStatus.OK).send(response);
            }
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }

    create (req, res) {
        originServices.create(req.body).then(response => {
            res.status(httpStatus.CREATED).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    }

    update (req, res, next) {
        if(!req.params?.id){
          return res.status(httpStatus.BAD_REQUEST).send({
              message : "ID bilgisi eksik !",
          });
        };
        originServices.update(req.params?.id, req.body).then(updatedProject => {
            if (!updatedProject) return next(new ApiError("Böyle bir kayıt bulunmamaktadır", 404));
            res.status(httpStatus.OK).send(updatedProject)
        }).catch((e) => next( new ApiError(e?.message)));
    }

    deletePoint (req, res) {
        if(!req.params?.id){
            return res.status(httpStatus.BAD_REQUEST).send({
                message : "ID bilgisi eksik !"
            });
        };
        originServices.delete(req.params?.id).then((deletedProject) => {
            if(!deletedProject) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message : "Bu ID değerine sahip main point bulunmamaktadır. !"
                });
            };
            res.status(httpStatus.OK).send({ message : "Belirtilen main point silinmiştir"});
        }).catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error : "Main Point silinirken bir sorunla karşılaşıldı."}));
    }
}

module.exports = new Origin();