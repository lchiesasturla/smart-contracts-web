export const personTemplate = {
    firstName: '',
    lastName: '',
    email: '',
    documentType: '',
    documentValue: '',
    address: {
        street: '',
        number: '',
        floor: '',
        apartment: '',
        betweenStreet: '',
        zipCode: '',
        location: '',
    }
};

export const contractTemplate = {
    duration: '',
    startDate: '',
    paymentDay: '',
    servicesTransfer: '',
    amount: '',
    paymentType: '',
    paymentValue: '',
    interests: '',
    address: {
        street: '',
        number: '',
        floor: '',
        apartment: '',
        betweenStreet: '',
        zipCode: '',
        city: '',
        location: ''
    }
}

export const createDocumentBody = (locator, tenant, contract) => {
    return `
    En la Ciudad de Buenos Aires, a los …. días del mes de ……… de …………….., entre ${locator.firstName} ${locator.lastName} con DNI N° ${locator.documentValue}, con domicilio en la calle ${locator.address.street} ${locator.address.number} por una parte, en lo sucesivo denominado/a como “LOCADOR/A”  por una parte, y por la otra ${tenant.firstName} ${tenant.lastName} DNI N° ${tenant.documentValue}, con domicilio en el inmueble locado en adelante denominado/a como “LOCATARIO/A”, convienen en celebrar el presente contrato de LOCACIÓN  de vivienda, sujeto a las cláusulas siguientes y a las disposiciones del Código Civil y Comercial
    
    ------------------------------------------------------------------------------------
     
    PRIMERA (OBJETO/DESTINO): EL/LA “LOCADOR/A” cede en locación al “LOCATARIO/A”, que acepta ocupar en tal carácter, el inmueble ubicado en calle ${contract.address.street} ${contract.address.number} de la Ciudad Autónoma de Buenos Aires. El LOCATARIO/A se obliga a destinar el inmueble locado para vivienda familiar, no pudiendo ello ser modificado, ni aún en forma temporaria, sin el consentimiento expreso del/la  “LOCADOR/A”.
    
    ---------------------------------------------------------------------------------------
    
    SEGUNDA (PLAZO):  Las partes acuerdan que el plazo de vigencia de la locación será de 36 (TREINTA Y SEIS)  meses a contar desde el día ….. del mes de …………. del año DOS MIL ……….. por lo que su vencimiento se producirá de pleno derecho e indefectiblemente el día
    
    -------------------------------------------------------------------------------------
    
    TERCERA (PRECIO Y AJUSTE): Las partes convienen un canon locativo de PESOS ($__._______) mensuales  para el primer año de contrato (12 meses iniciales).  El canon se actualizará de forma anual, conforme el Índice  elaborado y publicado mensualmente por el Banco Central de la República Argentina (BCRA) determinado en el art. ...del CCyCN.
    
    
    CUARTA (FECHA/LUGAR DE PAGO): EL/ LA LOCATARIO/A se obliga a abonar el alquiler convenido por mes entero y adelantado, entre el 1 y el 10 de cada mes. El pago se efectuará por transferencia electrónica o depósito bancario en la Cuenta N° …………del Banco……….., CUIT __-_________-_, CBU _____________________, titular del LOCADOR/A. 
    En contrapartida, EL/ LA LOCADOR/A extenderá al LOCATARIO/A la factura electrónica correspondiente, dentro de las 72hs (Res. N° 4004-E AFIP).
    
    QUINTA (INTERESES): La mora en el pago de los alquileres se producirá de forma automática por el mero transcurso del tiempo y sin necesidad de interpelación ni gestión previa de ninguna naturaleza. Producida la mora los alquileres siempre deberán abonarse con una multa equivalente a la tasa activa por plazo fijo en el Banco de la Nación Argentina , durante el tiempo que demore en efectivizar el pago de los alquileres  adeudados, pudiendo el/la LOCADOR/A a rehusar el cobro del alquiler en mora sin el pago conjunto de este interés.
    
    ----------------------------------------------------------
    
    SEXTA(PROHIBICIONES/INTRANSFERIBILIDAD): El presente contrato de locación es intransferible. Le queda prohibido al LOCATARIO/A cederlo o subarrendarlo total o parcialmente, sin consentimiento del/la LOCADOR/A, ya sea  en forma gratuita u onerosa, ni se podrá dar el inmueble en préstamo de uso, aunque sea gratuito ni permitir su ocupación por terceros en ningún carácter -dicha restricción no alcanza a las modificaciones en Ia conformación del grupo familiar del/la LOCATARIO/A que pudieran suceder durante Ia relación locativa-. Asimismo, queda estrictamente prohibido usarlo indebidamente por el/la LOCATARIO/A contrariando las leyes, ni darle otro destino que el establecido de vivienda personal únicamente (siendo específicamente determinado en el presente que no se podrá dar otro destino que el antes mencionado -Habitacional- en los términos del artículo 1194 del Código Civil y Comercial de la Nación sin el consentimiento del LOCADOR/A.
    
    ------------------------------------------------------------------------
    
    SÉPTIMA (LA CLÁUSULA DE GARANTÍA): 
    COMPLETAR CON GARANTÍA ELEGIDA
    
    OCTAVA (IMPUESTOS/SERVICIOS/EXPENSAS):
    Son obligaciones del LOCATARIO/A: a) El pago de los siguientes servicios: I) electricidad, gas, agua potable, II) cargas y contribuciones asociadas al destino de vivienda del inmueble, III) las expensas que deriven de gastos habituales ordinarios, entendiéndose por tales aquellos que se vinculan a los servicios normales y permanentes a disposición del LOCATORIO/A, independientemente de que sean considerados como expensas comunes ordinarias o extraordinarias. 
    b) Transferir la titularidad de los servicios de energía eléctrica, agua, teléfono, gas, TV x cable e internet, a su nombre y cargo en un plazo no superior a los sesenta (60) días corridos, a partir de la suscripción del presente, y abonar su suministro hasta la fecha de corte de los servicios al momento de entrega del inmueble al LOCADOR/A, en el que deberá presentar la correspondiente baja. Para el caso de registrarse deuda previa a este contrato en alguno de estos servicios, EL/LA LOCATARIO/A podrá cancelarla y compensar lo invertido de próximos alquileres. Esta decisión deberá anticipársela por vía electrónica al LOCADOR/A (art. 1204 bis., CCyCN). 
    c) Respetar la normativa local y exigencias de cualquier otra jurisdicción o naturaleza, por lo que asume la responsabilidad por todas las consecuencias que deriven de su inobservancia. d) Abonar las costas judiciales y extrajudiciales que se originen en el incumplimiento de sus obligaciones contractuales.
    Son obligaciones del LOCADOR/A: a) Realizar todas las reparaciones que requiera el inmueble, así como las necesarias para el normal funcionamiento de los servicios públicos, con excepción de aquellos arreglos cuya necesidad surjan por la responsabilidad del LOCATARIO/A (excluyendo en este caso la que se produzca por el normal uso de la cosa. b) Notificar al LOCATARIO/A, con al menos 72 hs de antelación, cualquier visita que quiera realizar sobre el inmueble. c) Restituir los gastos en que incurriere el/la LOCATARIO/ por reparaciones urgentes y excepcionales en el inmueble, siempre que el/la LOCATARIO/A haya previamente notificado al LOCADOR/A -por cualquier medio- y éste no lo resolviera en el plazo que la urgencia requiera. Estos gastos deberán estar debidamente acreditados, pudiendo el/la LOCATARIO/A en estos casos descontarlos del importe del alquiler. d) Abonar las expensas comunes extraordinarias (gastos no habituales) durante la relación locativa. e) Abonar las cargas y contribuciones que graven el inmueble  (impuesto inmobiliario), y cualquier otro que grave a la propiedad. f) Abonar las costas judiciales y extrajudiciales que se originen en el incumplimiento de sus obligaciones contractuales. -
    
    NOVENA (DEPÓSITO): En garantía de las obligaciones contraídas mediante este contrato, el/la LOCATARIO/A da en depósito al LOCADOR/A la suma equivalente a un mes de alquiler, correspondiente al valor del primer mes del contrato. En el momento mismo de restitución del inmueble EL/ LA LOCADOR/A deberá devolver al LOCATORIO/A el depósito en garantía, actualizado su valor al del último mes del contrato (art. 1196, CCyCN). 
    Para el caso que EL/LA LOCATORIO/A no presente libre deuda o exista/n servicio/s público/s domiciliario/s y/o expensas pendientes de pago o liquidación al momento de la entrega del inmueble, EL/LA LOCADOR/A podrá retener del depósito el valor de la última liquidación del servicio o la expensa pendiente de pago.
    
    DÉCIMA (ESTADO DEL INMUEBLE E INVENTARIO): 
    El LOCATARIO/A declara que ha visitado el inmueble y comprobado que el mismo se encuentra desocupado, y en el siguiente estado de conservación:
    Higiene:
    pintura de paredes:
    pintura de techos:
    aberturas:
    cerraduras y llaves:
    vidrios:
    pisos:
    revestimientos:
    instalaciones eléctricas:
    instalaciones de agua fría y caliente:
    sanitarios con sus artefactos:
    grifería:
    cocina:
    calefón:
    muebles de cocina:
    Otros:
     
    El/la LOCATARIO/A se obliga a preservar el inmueble, y a restituirlo en iguales condiciones a las de recepción, salvo por el normal desgaste propio de un uso adecuado de la cosa. Serán a exclusivo cargo del LOCATARIO/A todas las reparaciones, reconstrucciones y/o refacciones que fueran menester realizar para el debido cumplimiento de esta obligación, cualquiera fuera la causa, naturaleza o cuantía del deterioro, y sin derecho a reembolso alguno a su favor. En caso de no hacerlo, el/la LOCADOR/A tendrá derecho a realizarlo a cuenta del/la LOCATARIO/A.
    Serán a exclusivo cargo del/la LOCADOR/A las reparaciones, reconstrucciones y/o refacciones que fueran menester realizar en el inmueble por daños causados por fuerza mayor, hechos de terceros, vicios redhibitorios, o por el normal uso de la cosa, y sin derecho a reembolso alguno a su favor. En caso de no hacerlo, el/la LOCATARIO/A tendrá derecho a realizarlo a cuenta del/la LOCADOR/A, pudiendo descontarlo del importe del alquiler.
    En todos los casos, ambas partes podrán presentar presupuestos para su comparación y estipular de este modo el costo final de los arreglos.
    El LOCATARIO declara conocer y aceptar el reglamento de copropiedad y su falta de cumplimiento será causal de rescisión.
    
    DECIMAPRIMERA (INCUMPLIMIENTO): La violación por parte de EL/LA LOCATARIO/A de cualquiera de las obligaciones que asume en el presente, dará derecho a EL/LA LOCADOR/a para optar entre exigir su cabal cumplimiento o dar por resuelto el presente contrato y exigir el inmediato desalojo del inmueble con el pago de los daños y perjuicios pertinentes.
    
    ------------------------------------------------------------------------
    
    DECIMASEGUNDA (FALTA DE PAGO): La falta de pago de 2 meses de alquiler consecutivos, dará derecho al LOCADOR/A a, previos los trámites establecidos por la ley, considerar irrevocablemente rescindido el presente contrato de locación y convenio, pudiendo pedir el desalojo del bien y con derecho a reclamar las pérdidas e intereses que ocasione el incumplimiento. Previo a ello, en todos los casos el/la LOCADOR/A deberá intimar fehacientemente al LOCATARIO/A el pago de la cantidad debida, otorgando para ello un plazo que nunca debe ser inferior a diez días corridos contados a partir de la recepción de la intimación, consignando el lugar de pago.
    
    -----------------------
    
    DECIMATERCERA (PRIMER MES) :El/LA LOCATARIO/A abona en este acto la cantidad de PESOS ……………………… ($...........-) en concepto del alquiler correspondiente al mes de ………………. de …………... Por este primer canon, EL/ LA LOCADOR/A remitirá al LOCATARIO/A la correspondiente factura electrónica. El/LA LOCATARIO/A recibe en el presente acto las llaves y toma la tenencia de la locación que les acuerda este contrato.
    
    ---------------------------------------------------------------------------------------------------------
    
    DECIMACUARTA (ENTREGA DE LLAVES): Al vencimiento del contrato, el/la LOCATARIO/A deberá devolver las llaves al LOCADOR/A. La recepción por parte del/la LOCADOR/A del inmueble arrendado, aún sin reserva alguna de su parte, no importará conformidad con el estado del inmueble, por lo que el/la LOCATARIO/A deberá requerir comprobante de recepción en el que conste expresamente dicha circunstancia para su liberación..
    
    -------------------------------------------------------------------------------------------------
    
    DECIMAQUINTA (RESCISION ANTICIPADA): De acuerdo a lo establecido en el art. 1220 del Código Civil y Comercial, el/la LOCATARIO/A puede resolver el contrato en cualquier momento, sin costo alguno de su parte, si el/la LOCADOR/A incumple la obligación de conservar el inmueble con aptitud para el uso y goce convenido; o por la garantía de evicción o la de vicios redhibitorios.“EL/la LOCATARIO/A” podrá, transcurridos los seis primeros meses de vigencia de la relación locativa, resolver la contratación, debiendo notificar en forma fehaciente su decisión a “EL/la LOCADOR/A” con una antelación mínima de treinta días. “EL LOCATARIO” de hacer uso de la opción resolutoria, en el primer año de vigencia de la relación locativa, deberá abonar a “EL/la LOCADOR/a“ en concepto de indemnización la suma equivalente a un mes y medio de alquiler al momento de desocupar la vivienda, y la de un solo mes si la opción se ejercita transcurrido dicho lapso. Transcurridos los primeros seis (6) meses de relación, si EL/LA LOCATARIO/A notifica al LOCADOR/A su decisión con una anticipación de tres (3) meses o más, no corresponde el pago de indemnización por rescisión anticipada (art. 1221 CCyCN)..
    
    --------------------------------------------------------------------------------------------------------
    DECIMA SEXTA (RENOVACIÓN): Dentro de los últimos tres (3) meses del contrato cualquiera de las partes puede convocar, mediante notificación fehaciente, a la otra a conversar sobre la renovación de la locación.La parte notificada tiene un plazo de 72 horas para responder a la solicitud.  El silencio de EL/LA LOCADORA, o su negativa a renovar el contrato, habilitará a la LOCATARIA a rescindir el contrato de forma anticipada, sin necesidad de preaviso ni obligación de indemnizar al LOCADOR/A (art. 1221 bis CCyCN).
    
    --------------------------------------------------------------------
    
    DECIMA SÉPTIMA (DOMICILIOS DE LAS PARTES) :
    Las partes establecen los siguientes domicilios para todo lo relativo al presente contrato: 
    a) LOCADOR/A – en ______________ _____, CABA; ______@___.com; 
    b) LOCATARIO/A – en el inmueble locado; y ______@___.com. 
    Ambas convienen que las comunicaciones y emplazamientos entre sí con motivo del presente contrato se efectuarán por vía electrónica, exclusivamente. Las notificaciones cursadas de este modo se tendrán por válidas y plenamente eficaces (art. 75, CCyCN). 
    
    Dicho domicilio será utilizado personal y exclusivamente por su titular quien se constituye responsable de su uso y custodio de la información y documentación que al mismo se envíe, asumiendo las consecuencias de su divulgación a terceros. LAS PARTES asumen la responsabilidad por el uso indebido o inadecuado, haciéndose cargo de todos los daños y perjuicios que su accionar generen. LAS PARTES aceptan la existencia de las notificaciones que electrónicamente envíen al domicilio electrónico fijado, teniéndolas como válidas y plenamente eficaces a partir del día de la emisión de la misma y comenzarán a correr los plazos procesales, en aquellos supuestos en que las notificaciones sean enviadas en día inhábil, el plazo habrá de comenzar a correr a partir del primer día hábil siguiente. LAS PARTES asumen la obligación de abrir y/o revisar diariamente la casilla de correo electrónico denunciada para su domicilio electrónico. LAS PARTES podrán modificar su el domicilio electrónico, previa comunicación fehaciente con antelación no menor a 30 días.
    
    DÉCIMA OCTAVA (REGISTRACIÓN): En cumplimiento al art. 16 de la Ley N° XXXXX, EL/ LA LOCADOR/A registrará el presente ante la AFIP en el transcurso de los próximos treinta (30) días (art. 16 de la Ley N° XXXXX).
    
    ---------------------------------------------------------------------------------------------------------
    
    DÉCIMA NOVENA: Las partes se someten a la jurisdicción y competencia de la Justicia Ordinaria en lo Civil de la Capital Federal con expresa renuncia a cualquier otro fuero y/o jurisdicción que pudiera corresponderles.
    
    ------------------------------------------------------------------------------------------
    
    En prueba de conformidad previa lectura y ratificación se firman tres ejemplares de un mismo tenor y a un solo efecto, en ______ a los ____ días del mes de ______ del 20__.
    
    `;
}