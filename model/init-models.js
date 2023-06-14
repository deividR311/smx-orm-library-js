var DataTypes = require("sequelize").DataTypes;
var _answers = require("./answers");
var _atendedor_eess = require("./atendedor_eess");
var _countrysettings = require("./countrysettings");
var _dsps = require("./dsps");
var _ee_ss = require("./ee_ss");
var _fps = require("./fps");
var _fuelprice = require("./fuelprice");
var _fusion = require("./fusion");
var _fusion_device_status = require('./fusion_device_status');
var _fusion_enabled_devices = require("./fusion_enabled_devices");
var _fusion_fdc_events = require("./fusion_fdc_events");
var _fusion_request = require("./fusion_request");
var _fusion_response = require("./fusion_response");
var _impuesto_especifico = require("./impuesto_especifico");
var _map_product_name = require("./map_product_name");
var _modetable = require("./modetable");
var _modetable_item = require("./modetable_item");
var _movimientos_turno = require("./movimientos_turno");
var _nozzles = require("./nozzles");
var _organizacion = require("./organizacion");
var _personas = require("./personas");
var _products_dsp = require("./products_dsp");
var _producttable = require("./producttable");
var _producttable_item = require("./producttable_item");
var _qruses = require("./qruses");
var _question = require("./question");
var _session = require("./session");
var _supervisor_eess = require("./supervisor_eess");
var _sovos_users = require("./sovos_users");
var _survey = require("./survey");
var _survey_question = require("./survey_question");
var _tbk_inscription_request = require("./tbk_inscription_request");
var _tbk_webpay_payment_request = require("./tbk_webpay_payment_request");
var _tbk_chek_request = require("./tbk_chek_request");
var _tbk_mall = require("./tbk_mall");
var _tbk_ocm_payment_trx = require("./tbk_ocm_payment_trx");
var _tbk_oneclick_data = require("./tbk_oneclick_data");
var _tbk_store = require("./tbk_store");
var _trx_pending_task = require("./trx_pending_task");
var _turnos = require("./turnos");
var _usuarios = require("./usuarios");
var _usuarios_survey = require("./usuarios_survey");
var _valid_options = require("./valid_options");
var _atendedores = require("./atendedores");
var _atendedores_login = require("./atendedores_login");
var _atendedores_sale_detail = require("./atendedores_sale_detail");
var _notification = require("./notification");
var _notification_record = require("./notification_record");
var _roles = require('./roles');
var _atendedores_session = require('./atendedores_session');
const _cash_payment = require("./cash_payment");
const _abm_estaciones_servicio = require("./abm_estaciones_servicio");
const _abm_perfi = require("./abm_perfi");
const _abm_permiso = require("./abm_permiso");
const _abm_permisos_modulo = require("./abm_permisos_modulo");
const _abm_rol = require("./abm_rol");
const _abm_usuario = require("./abm_usuario");
const _abm_usuario_perfil = require("./abm_usuario_perfil");
const _abm_usuario_rol = require("./abm_usuario_rol");
const _eess_module = require("./eess_module");
const _paymentMethod = require("./paymentMethod");
const _abm_usuarios_eess = require("./abm_usuarios_eess");

function initModels(sequelize) {
  var answers = _answers(sequelize, DataTypes);
  var atendedor_eess = _atendedor_eess(sequelize, DataTypes);
  var countrysettings = _countrysettings(sequelize, DataTypes);
  var dsps = _dsps(sequelize, DataTypes);
  var ee_ss = _ee_ss(sequelize, DataTypes);
  var fps = _fps(sequelize, DataTypes);
  var fuelprice = _fuelprice(sequelize, DataTypes);
  var fusion = _fusion(sequelize, DataTypes);
  var fusion_device_status = _fusion_device_status(sequelize, DataTypes);
  var fusion_enabled_devices = _fusion_enabled_devices(sequelize, DataTypes);
  var fusion_fdc_events = _fusion_fdc_events(sequelize, DataTypes);
  var fusion_request = _fusion_request(sequelize, DataTypes);
  var fusion_response = _fusion_response(sequelize, DataTypes);
  var impuesto_especifico = _impuesto_especifico(sequelize, DataTypes);
  var map_product_name = _map_product_name(sequelize, DataTypes);
  var modetable = _modetable(sequelize, DataTypes);
  var modetable_item = _modetable_item(sequelize, DataTypes);
  var movimientos_turno = _movimientos_turno(sequelize, DataTypes);
  var nozzles = _nozzles(sequelize, DataTypes);
  var organizacion = _organizacion(sequelize, DataTypes);
  var personas = _personas(sequelize, DataTypes);
  var products_dsp = _products_dsp(sequelize, DataTypes);
  var producttable = _producttable(sequelize, DataTypes);
  var producttable_item = _producttable_item(sequelize, DataTypes);
  var qruses = _qruses(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var session = _session(sequelize, DataTypes);
  var sovos_users = _sovos_users(sequelize, DataTypes);
  var supervisor_eess = _supervisor_eess(sequelize, DataTypes);
  var survey = _survey(sequelize, DataTypes);
  var survey_question = _survey_question(sequelize, DataTypes);
  var tbk_inscription_request = _tbk_inscription_request(sequelize, DataTypes);
  var tbk_webpay_payment_request = _tbk_webpay_payment_request(sequelize, DataTypes);
  var tbk_chek_request = _tbk_chek_request(sequelize, DataTypes);
  var tbk_mall = _tbk_mall(sequelize, DataTypes);
  var tbk_ocm_payment_trx = _tbk_ocm_payment_trx(sequelize, DataTypes);
  var tbk_oneclick_data = _tbk_oneclick_data(sequelize, DataTypes);
  var tbk_store = _tbk_store(sequelize, DataTypes);
  var trx_pending_task = _trx_pending_task(sequelize, DataTypes);
  var turnos = _turnos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var usuarios_survey = _usuarios_survey(sequelize, DataTypes);
  var valid_options = _valid_options(sequelize, DataTypes);
  var atendedores = _atendedores(sequelize, DataTypes);
  var atendedores_login = _atendedores_login(sequelize, DataTypes);
  var atendedores_sale_detail = _atendedores_sale_detail(sequelize, DataTypes);
  var notification = _notification(sequelize, DataTypes);
  var notification_record = _notification_record(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var atendedores_session = _atendedores_session(sequelize, DataTypes);
  var cash_payment = _cash_payment(sequelize, DataTypes);
  var abm_estaciones_servicio = _abm_estaciones_servicio(sequelize, DataTypes);
  var abm_perfi = _abm_perfi(sequelize, DataTypes);
  var abm_permiso = _abm_permiso(sequelize, DataTypes);
  var abm_permisos_modulo = _abm_permisos_modulo(sequelize, DataTypes);
  var abm_rol = _abm_rol(sequelize, DataTypes);
  var abm_usuario = _abm_usuario(sequelize, DataTypes);
  var abm_usuario_perfil = _abm_usuario_perfil(sequelize, DataTypes);
  var abm_usuario_rol = _abm_usuario_rol(sequelize, DataTypes);

  var paymentMethod = _paymentMethod(sequelize, DataTypes);
  var eess_module = _eess_module(sequelize, DataTypes);

  var abm_usuarios_eess = _abm_usuarios_eess(sequelize, DataTypes);

  answers.belongsTo(valid_options, { foreignKey: "idoption" });
  valid_options.hasMany(answers, { foreignKey: "idoption" });
  atendedor_eess.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(atendedor_eess, { foreignKey: "ideess" });
  atendedor_eess.belongsTo(personas, { foreignKey: "rut" });
  personas.hasOne(atendedor_eess, { foreignKey: "rut" });
  countrysettings.belongsTo(fusion, { foreignKey: "ideess" });
  fusion.hasMany(countrysettings, { foreignKey: "ideess" });
  dsps.belongsTo(fusion, { foreignKey: "ideess" });
  fusion.hasMany(dsps, { foreignKey: "ideess" });
  fps.belongsTo(dsps, { foreignKey: "iddsps" });
  dsps.hasMany(fps, { foreignKey: "iddsps" });
  fuelprice.belongsTo(products_dsp, { foreignKey: "idproductsdsp", onDelete: 'NO ACTION' });
  products_dsp.hasMany(fuelprice, { foreignKey: "idproductsdsp", onDelete: 'CASCADE', hooks: true, constraints: true });
  fusion.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasOne(fusion, { foreignKey: "ideess" });
  fusion_enabled_devices.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(fusion_enabled_devices, { foreignKey: "ideess" });
  fusion_fdc_events.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(fusion_fdc_events, { foreignKey: "ideess" });
  fusion_request.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(fusion_request, { foreignKey: "ideess" });
  fusion_response.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(fusion_response, { foreignKey: "ideess" });
  modetable.belongsTo(fusion, { foreignKey: "ideess" });
  fusion.hasMany(modetable, { foreignKey: "ideess" });
  modetable_item.belongsTo(modetable, { foreignKey: "idmodetable", onDelete: 'NO ACTION' });
  modetable.hasMany(modetable_item, { foreignKey: "idmodetable", onDelete: 'CASCADE', hooks: true, constraints: true });
  movimientos_turno.belongsTo(turnos, { foreignKey: "idturno" });
  turnos.hasMany(movimientos_turno, { foreignKey: "idturno" });
  nozzles.belongsTo(fps, { foreignKey: "idfps" });
  fps.hasMany(nozzles, { foreignKey: "idfps" });
  products_dsp.belongsTo(dsps, { foreignKey: "iddsps", onDelete: 'NO ACTION' });
  dsps.hasMany(products_dsp, { foreignKey: "iddsps", onDelete: 'CASCADE', hooks: true, constraints: true });
  producttable.belongsTo(fusion, { foreignKey: "ideess" });
  fusion.hasMany(producttable, { foreignKey: "ideess" });
  producttable_item.belongsTo(producttable, { foreignKey: "idproducttable", onDelete: 'NO ACTION' });
  producttable.hasMany(producttable_item, { foreignKey: "idproducttable", onDelete: 'CASCADE', hooks: true, constraints: true });
  supervisor_eess.belongsTo(personas, { foreignKey: "rut" });
  personas.hasOne(supervisor_eess, { foreignKey: "rut" });
  supervisor_eess.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(supervisor_eess, { foreignKey: "ideess" });
  survey_question.belongsTo(survey, { foreignKey: "idsurvey" });
  survey.hasMany(survey_question, { foreignKey: "idsurvey" });
  survey_question.belongsTo(question, { foreignKey: "idquestion" });
  question.hasMany(survey_question, { foreignKey: "idquestion" });
  tbk_mall.belongsTo(organizacion, { foreignKey: "rutorganizacion" });
  organizacion.hasMany(tbk_mall, { foreignKey: "rutorganizacion" });
  tbk_oneclick_data.belongsTo(usuarios, { foreignKey: "rut" });
  usuarios.hasMany(tbk_oneclick_data, { foreignKey: "rut" });
  tbk_store.belongsTo(ee_ss, { foreignKey: "ideess" });
  ee_ss.hasMany(tbk_store, { foreignKey: "ideess" });
  turnos.belongsTo(atendedor_eess, { foreignKey: "rut" });
  atendedor_eess.hasMany(turnos, { foreignKey: "rut" });
  usuarios.belongsTo(personas, { foreignKey: "rut" });
  personas.hasOne(usuarios, { foreignKey: "rut" });
  valid_options.belongsTo(question, { foreignKey: "idquestion" });
  question.hasMany(valid_options, { foreignKey: "idquestion" });

  //atendedores
  atendedores.hasOne(atendedores_login, { foreignKey: "rut" });
  atendedores_login.belongsTo(atendedores, { foreignKey: "rut" });
  atendedores.hasOne(ee_ss, { sourceKey: "ideess", foreignKey: "ideess" });

  //atendedores detalle de venta
  atendedores_sale_detail.hasOne(cash_payment, { sourceKey: "idcashpayment", foreignKey: "cashPaymentId" });
  atendedores.belongsTo(atendedores_sale_detail, { foreignKey: "rut" });
  atendedores_sale_detail.hasMany(atendedores, { foreignKey: "rut" });

  atendedores.hasOne(roles, { sourceKey: "idrol", foreignKey: "id" });


  // notifications
  atendedores.hasMany(notification_record, { foreignKey: "rut" });
  notification_record.belongsTo(atendedores, { foreignKey: "rut" });

  dsps.hasMany(notification_record, { foreignKey: "iddsps" });
  notification_record.belongsTo(dsps, { foreignKey: "iddsps" });

  trx_pending_task.hasOne(notification_record, { foreignKey: "idpaymenttrx" });
  notification_record.belongsTo(trx_pending_task, { foreignKey: "idpaymenttrx" });

  notification.hasMany(notification_record, { foreignKey: "notificationId" });
  notification_record.belongsTo(notification, { foreignKey: "notificationId" });

  usuarios.hasMany(notification_record, { foreignKey: "rut" });
  notification_record.belongsTo(usuarios, { foreignKey: "userRut" });

  cash_payment.hasMany(notification_record, { foreignKey: "cashPaymentId" });
  notification_record.belongsTo(cash_payment, { foreignKey: "cashPaymentId" });

  personas.hasMany(notification_record, { foreignKey: "rut" });
  notification_record.belongsTo(personas, { foreignKey: "peopleRut" });
  // notifications

  // cash_payment
  atendedores.hasMany(cash_payment, { foreignKey: "rut" });
  cash_payment.belongsTo(atendedores, { foreignKey: "rut" });

  dsps.hasMany(cash_payment, { foreignKey: "iddsps" });
  cash_payment.belongsTo(dsps, { foreignKey: "iddsps" });

  trx_pending_task.hasOne(cash_payment, { foreignKey: "idpaymenttrx" });
  cash_payment.belongsTo(trx_pending_task, { foreignKey: "idpaymenttrx" });

  usuarios.hasMany(cash_payment, { foreignKey: "userRut" });
  cash_payment.belongsTo(usuarios, { foreignKey: "rut" });
  // cash_payment

  // paymentMethod
  ee_ss.hasMany(eess_module, { foreignKey: "ideess" });
  eess_module.belongsTo(ee_ss, { foreignKey: "ideess" });

  dsps.hasMany(eess_module, { foreignKey: "iddsps" });
  eess_module.belongsTo(dsps, { foreignKey: "iddsps" });

  abm_usuario.hasMany(eess_module, { foreignKey: "userGuid" });
  eess_module.belongsTo(abm_usuario, { foreignKey: "userGuid" });

  paymentMethod.hasMany(eess_module, { foreignKey: "paymentMethodId" });
  eess_module.belongsTo(paymentMethod, { foreignKey: "paymentMethodId" });
  // paymentMethod

  // ABM
  abm_permisos_modulo.hasOne(abm_estaciones_servicio, { sourceKey: "fk_estacion_servicio", foreignKey: "id" });

  // ABM abm_usuarios_eess
  abm_usuario.hasMany(abm_usuarios_eess, { foreignKey: "userGuid" });
  abm_usuarios_eess.belongsTo(abm_usuario, { foreignKey: "userGuid" });
  ee_ss.hasMany(abm_usuarios_eess, { foreignKey: "ideess" });
  abm_usuarios_eess.belongsTo(ee_ss, { foreignKey: "ideess" });


  return {
    answers,
    atendedor_eess,
    countrysettings,
    dsps,
    ee_ss,
    fps,
    fuelprice,
    fusion,
    fusion_device_status,
    fusion_enabled_devices,
    fusion_fdc_events,
    fusion_request,
    fusion_response,
    impuesto_especifico,
    map_product_name,
    modetable,
    modetable_item,
    movimientos_turno,
    nozzles,
    organizacion,
    personas,
    products_dsp,
    producttable,
    producttable_item,
    qruses,
    question,
    session,
    sovos_users,
    supervisor_eess,
    survey,
    survey_question,
    tbk_inscription_request,
    tbk_webpay_payment_request,
    tbk_chek_request,
    tbk_mall,
    tbk_ocm_payment_trx,
    tbk_oneclick_data,
    tbk_store,
    trx_pending_task,
    turnos,
    usuarios,
    usuarios_survey,
    valid_options,
    atendedores,
    atendedores_login,
    atendedores_sale_detail,
    notification_record,
    notification,
    paymentMethod,
    eess_module,
    roles,
    atendedores_session,
    abm_estaciones_servicio,
    abm_perfi,
    abm_permiso,
    abm_permisos_modulo,
    abm_rol,
    abm_usuario,
    abm_usuario_perfil,
    abm_usuario_rol,
    abm_usuarios_eess
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
