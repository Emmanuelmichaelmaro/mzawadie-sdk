import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    DateTime: any;
    GenericScalar: any;
    JSONString: any;
    PositiveDecimal: any;
    UUID: any;
    Upload: any;
    WeightScalar: any;
    _Any: any;
};

export type AccountAddressCreate = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountAddressDelete = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountAddressUpdate = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type AccountError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: AccountErrorCode;
    addressType?: Maybe<AddressTypeEnum>;
};

export type AccountErrorCode =
    | "ACTIVATE_OWN_ACCOUNT"
    | "ACTIVATE_SUPERUSER_ACCOUNT"
    | "DUPLICATED_INPUT_ITEM"
    | "DEACTIVATE_OWN_ACCOUNT"
    | "DEACTIVATE_SUPERUSER_ACCOUNT"
    | "DELETE_NON_STAFF_USER"
    | "DELETE_OWN_ACCOUNT"
    | "DELETE_STAFF_ACCOUNT"
    | "DELETE_SUPERUSER_ACCOUNT"
    | "GRAPHQL_ERROR"
    | "INACTIVE"
    | "INVALID"
    | "INVALID_PASSWORD"
    | "LEFT_NOT_MANAGEABLE_PERMISSION"
    | "INVALID_CREDENTIALS"
    | "NOT_FOUND"
    | "OUT_OF_SCOPE_USER"
    | "OUT_OF_SCOPE_GROUP"
    | "OUT_OF_SCOPE_PERMISSION"
    | "PASSWORD_ENTIRELY_NUMERIC"
    | "PASSWORD_TOO_COMMON"
    | "PASSWORD_TOO_SHORT"
    | "PASSWORD_TOO_SIMILAR"
    | "REQUIRED"
    | "UNIQUE"
    | "JWT_SIGNATURE_EXPIRED"
    | "JWT_INVALID_TOKEN"
    | "JWT_DECODE_ERROR"
    | "JWT_MISSING_TOKEN"
    | "JWT_INVALID_CSRF_TOKEN"
    | "CHANNEL_INACTIVE"
    | "MISSING_CHANNEL_SLUG";

export type AccountInput = {
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    defaultBillingAddress?: Maybe<AddressInput>;
    defaultShippingAddress?: Maybe<AddressInput>;
    languageCode?: Maybe<LanguageCodeEnum>;
};

export type AccountRegister = {
    requiresConfirmation?: Maybe<Scalars["Boolean"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type AccountRegisterInput = {
    email: Scalars["String"];
    password: Scalars["String"];
    redirectUrl?: Maybe<Scalars["String"]>;
    languageCode?: Maybe<LanguageCodeEnum>;
    metadata?: Maybe<Array<MetadataInput>>;
    channel?: Maybe<Scalars["String"]>;
};

export type AccountRequestDeletion = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type AccountSetDefaultAddress = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type AccountUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type Address = Node & {
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    companyName: Scalars["String"];
    streetAddress1: Scalars["String"];
    streetAddress2: Scalars["String"];
    city: Scalars["String"];
    cityArea: Scalars["String"];
    postalCode: Scalars["String"];
    country: CountryDisplay;
    countryArea: Scalars["String"];
    phone?: Maybe<Scalars["String"]>;
    isDefaultShippingAddress?: Maybe<Scalars["Boolean"]>;
    isDefaultBillingAddress?: Maybe<Scalars["Boolean"]>;
};

export type AddressCreate = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressDelete = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressInput = {
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    companyName?: Maybe<Scalars["String"]>;
    streetAddress1?: Maybe<Scalars["String"]>;
    streetAddress2?: Maybe<Scalars["String"]>;
    city?: Maybe<Scalars["String"]>;
    cityArea?: Maybe<Scalars["String"]>;
    postalCode?: Maybe<Scalars["String"]>;
    country?: Maybe<CountryCode>;
    countryArea?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
};

export type AddressSetDefault = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type AddressTypeEnum = "BILLING" | "SHIPPING";

export type AddressUpdate = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressValidationData = {
    countryCode?: Maybe<Scalars["String"]>;
    countryName?: Maybe<Scalars["String"]>;
    addressFormat?: Maybe<Scalars["String"]>;
    addressLatinFormat?: Maybe<Scalars["String"]>;
    allowedFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
    requiredFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
    upperFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
    countryAreaType?: Maybe<Scalars["String"]>;
    countryAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    cityType?: Maybe<Scalars["String"]>;
    cityChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    cityAreaType?: Maybe<Scalars["String"]>;
    cityAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    postalCodeType?: Maybe<Scalars["String"]>;
    postalCodeMatchers?: Maybe<Array<Maybe<Scalars["String"]>>>;
    postalCodeExamples?: Maybe<Array<Maybe<Scalars["String"]>>>;
    postalCodePrefix?: Maybe<Scalars["String"]>;
};

export type Allocation = Node & {
    id: Scalars["ID"];
    quantity: Scalars["Int"];
    warehouse: Warehouse;
};

export type App = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name?: Maybe<Scalars["String"]>;
        created?: Maybe<Scalars["DateTime"]>;
        isActive?: Maybe<Scalars["Boolean"]>;
        permissions?: Maybe<Array<Maybe<Permission>>>;
        tokens?: Maybe<Array<Maybe<AppToken>>>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        type?: Maybe<AppTypeEnum>;
        webhooks?: Maybe<Array<Maybe<Webhook>>>;
        aboutApp?: Maybe<Scalars["String"]>;
        dataPrivacy?: Maybe<Scalars["String"]>;
        dataPrivacyUrl?: Maybe<Scalars["String"]>;
        homepageUrl?: Maybe<Scalars["String"]>;
        supportUrl?: Maybe<Scalars["String"]>;
        configurationUrl?: Maybe<Scalars["String"]>;
        appUrl?: Maybe<Scalars["String"]>;
        version?: Maybe<Scalars["String"]>;
        accessToken?: Maybe<Scalars["String"]>;
    };

export type AppActivate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<AppCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type AppCountableEdge = {
    node: App;
    cursor: Scalars["String"];
};

export type AppCreate = {
    authToken?: Maybe<Scalars["String"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDeactivate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDeleteFailedInstallation = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export type AppError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: AppErrorCode;
    permissions?: Maybe<Array<PermissionEnum>>;
};

export type AppErrorCode =
    | "FORBIDDEN"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "INVALID_STATUS"
    | "INVALID_PERMISSION"
    | "INVALID_URL_FORMAT"
    | "INVALID_MANIFEST_FORMAT"
    | "MANIFEST_URL_CANT_CONNECT"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "OUT_OF_SCOPE_APP"
    | "OUT_OF_SCOPE_PERMISSION";

export type AppFetchManifest = {
    manifest?: Maybe<Manifest>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
};

export type AppFilterInput = {
    search?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    type?: Maybe<AppTypeEnum>;
};

export type AppInput = {
    name?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

export type AppInstall = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export type AppInstallInput = {
    appName?: Maybe<Scalars["String"]>;
    manifestUrl?: Maybe<Scalars["String"]>;
    activateAfterInstallation?: Maybe<Scalars["Boolean"]>;
    permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

export type AppInstallation = Node &
    Job & {
        appName: Scalars["String"];
        manifestUrl: Scalars["String"];
        id: Scalars["ID"];
        status: JobStatusEnum;
        createdAt: Scalars["DateTime"];
        updatedAt: Scalars["DateTime"];
        message?: Maybe<Scalars["String"]>;
    };

export type AppRetryInstall = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export type AppSortField = "NAME" | "CREATION_DATE";

export type AppSortingInput = {
    direction: OrderDirection;
    field: AppSortField;
};

export type AppToken = Node & {
    name?: Maybe<Scalars["String"]>;
    authToken?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
};

export type AppTokenCreate = {
    authToken?: Maybe<Scalars["String"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appToken?: Maybe<AppToken>;
};

export type AppTokenDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appToken?: Maybe<AppToken>;
};

export type AppTokenInput = {
    name?: Maybe<Scalars["String"]>;
    app: Scalars["ID"];
};

export type AppTokenVerify = {
    valid: Scalars["Boolean"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
};

export type AppTypeEnum = "LOCAL" | "THIRDPARTY";

export type AppUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AreaUnitsEnum = "SQ_CM" | "SQ_M" | "SQ_KM" | "SQ_FT" | "SQ_YD" | "SQ_INCH";

export type AssignNavigation = {
    menu?: Maybe<Menu>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type Attribute = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        productTypes: ProductTypeCountableConnection;
        productVariantTypes: ProductTypeCountableConnection;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        inputType?: Maybe<AttributeInputTypeEnum>;
        entityType?: Maybe<AttributeEntityTypeEnum>;
        name?: Maybe<Scalars["String"]>;
        slug?: Maybe<Scalars["String"]>;
        type?: Maybe<AttributeTypeEnum>;
        unit?: Maybe<MeasurementUnitsEnum>;
        choices?: Maybe<AttributeValueCountableConnection>;
        valueRequired: Scalars["Boolean"];
        visibleInStorefront: Scalars["Boolean"];
        filterableInStorefront: Scalars["Boolean"];
        filterableInDashboard: Scalars["Boolean"];
        availableInGrid: Scalars["Boolean"];
        translation?: Maybe<AttributeTranslation>;
        storefrontSearchPosition: Scalars["Int"];
        withChoices: Scalars["Boolean"];
    };

export type AttributeProductTypesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type AttributeProductVariantTypesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type AttributeChoicesArgs = {
    sortBy?: Maybe<AttributeChoicesSortingInput>;
    filter?: Maybe<AttributeValueFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type AttributeTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeChoicesSortField = "NAME" | "SLUG";

export type AttributeChoicesSortingInput = {
    direction: OrderDirection;
    field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<AttributeCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type AttributeCountableEdge = {
    node: Attribute;
    cursor: Scalars["String"];
};

export type AttributeCreate = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
    inputType?: Maybe<AttributeInputTypeEnum>;
    entityType?: Maybe<AttributeEntityTypeEnum>;
    name: Scalars["String"];
    slug?: Maybe<Scalars["String"]>;
    type: AttributeTypeEnum;
    unit?: Maybe<MeasurementUnitsEnum>;
    values?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
    valueRequired?: Maybe<Scalars["Boolean"]>;
    isVariantOnly?: Maybe<Scalars["Boolean"]>;
    visibleInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInDashboard?: Maybe<Scalars["Boolean"]>;
    storefrontSearchPosition?: Maybe<Scalars["Int"]>;
    availableInGrid?: Maybe<Scalars["Boolean"]>;
};

export type AttributeDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attribute?: Maybe<Attribute>;
};

export type AttributeEntityTypeEnum = "PAGE" | "PRODUCT";

export type AttributeError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: AttributeErrorCode;
};

export type AttributeErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type AttributeFilterInput = {
    valueRequired?: Maybe<Scalars["Boolean"]>;
    isVariantOnly?: Maybe<Scalars["Boolean"]>;
    visibleInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInDashboard?: Maybe<Scalars["Boolean"]>;
    availableInGrid?: Maybe<Scalars["Boolean"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    search?: Maybe<Scalars["String"]>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    type?: Maybe<AttributeTypeEnum>;
    inCollection?: Maybe<Scalars["ID"]>;
    inCategory?: Maybe<Scalars["ID"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type AttributeInput = {
    slug: Scalars["String"];
    values?: Maybe<Array<Maybe<Scalars["String"]>>>;
    valuesRange?: Maybe<IntRangeInput>;
    dateTime?: Maybe<DateTimeRangeInput>;
    date?: Maybe<DateRangeInput>;
    boolean?: Maybe<Scalars["Boolean"]>;
};

export type AttributeInputTypeEnum =
    | "DROPDOWN"
    | "MULTISELECT"
    | "FILE"
    | "REFERENCE"
    | "NUMERIC"
    | "RICH_TEXT"
    | "BOOLEAN"
    | "DATE"
    | "DATE_TIME";

export type AttributeReorderValues = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeSortField =
    | "NAME"
    | "SLUG"
    | "VALUE_REQUIRED"
    | "IS_VARIANT_ONLY"
    | "VISIBLE_IN_STOREFRONT"
    | "FILTERABLE_IN_STOREFRONT"
    | "FILTERABLE_IN_DASHBOARD"
    | "STOREFRONT_SEARCH_POSITION"
    | "AVAILABLE_IN_GRID";

export type AttributeSortingInput = {
    direction: OrderDirection;
    field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    translation?: Maybe<AttributeTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    attribute?: Maybe<Attribute>;
};

export type AttributeTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    attribute?: Maybe<Attribute>;
};

export type AttributeTranslation = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    language: LanguageDisplay;
};

export type AttributeTypeEnum = "PRODUCT_TYPE" | "PAGE_TYPE";

export type AttributeUpdate = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    unit?: Maybe<MeasurementUnitsEnum>;
    removeValues?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    addValues?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
    valueRequired?: Maybe<Scalars["Boolean"]>;
    isVariantOnly?: Maybe<Scalars["Boolean"]>;
    visibleInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInStorefront?: Maybe<Scalars["Boolean"]>;
    filterableInDashboard?: Maybe<Scalars["Boolean"]>;
    storefrontSearchPosition?: Maybe<Scalars["Int"]>;
    availableInGrid?: Maybe<Scalars["Boolean"]>;
};

export type AttributeValue = Node & {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["String"]>;
    translation?: Maybe<AttributeValueTranslation>;
    inputType?: Maybe<AttributeInputTypeEnum>;
    reference?: Maybe<Scalars["ID"]>;
    file?: Maybe<File>;
    richText?: Maybe<Scalars["JSONString"]>;
    boolean?: Maybe<Scalars["Boolean"]>;
    date?: Maybe<Scalars["Date"]>;
    dateTime?: Maybe<Scalars["DateTime"]>;
};

export type AttributeValueTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeValueBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<AttributeValueCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type AttributeValueCountableEdge = {
    node: AttributeValue;
    cursor: Scalars["String"];
};

export type AttributeValueCreate = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueCreateInput = {
    name: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
    richText?: Maybe<Scalars["JSONString"]>;
};

export type AttributeValueDelete = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueFilterInput = {
    search?: Maybe<Scalars["String"]>;
};

export type AttributeValueInput = {
    id?: Maybe<Scalars["ID"]>;
    values?: Maybe<Array<Scalars["String"]>>;
    file?: Maybe<Scalars["String"]>;
    contentType?: Maybe<Scalars["String"]>;
    references?: Maybe<Array<Scalars["ID"]>>;
    richText?: Maybe<Scalars["JSONString"]>;
    boolean?: Maybe<Scalars["Boolean"]>;
    date?: Maybe<Scalars["Date"]>;
    dateTime?: Maybe<Scalars["DateTime"]>;
};

export type AttributeValueTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    richText?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<AttributeValueTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueTranslation = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    richText?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
};

export type AttributeValueTranslationInput = {
    name?: Maybe<Scalars["String"]>;
    richText?: Maybe<Scalars["JSONString"]>;
};

export type AttributeValueUpdate = {
    attribute?: Maybe<Attribute>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type BulkAttributeValueInput = {
    id?: Maybe<Scalars["ID"]>;
    values?: Maybe<Array<Scalars["String"]>>;
    boolean?: Maybe<Scalars["Boolean"]>;
};

export type BulkProductError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
    index?: Maybe<Scalars["Int"]>;
    warehouses?: Maybe<Array<Scalars["ID"]>>;
    channels?: Maybe<Array<Scalars["ID"]>>;
};

export type BulkStockError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
    index?: Maybe<Scalars["Int"]>;
};

export type CatalogueInput = {
    products?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    categories?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    collections?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type Category = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        seoTitle?: Maybe<Scalars["String"]>;
        seoDescription?: Maybe<Scalars["String"]>;
        name: Scalars["String"];
        description?: Maybe<Scalars["JSONString"]>;
        slug: Scalars["String"];
        parent?: Maybe<Category>;
        level: Scalars["Int"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
        descriptionJson?: Maybe<Scalars["JSONString"]>;
        ancestors?: Maybe<CategoryCountableConnection>;
        products?: Maybe<ProductCountableConnection>;
        children?: Maybe<CategoryCountableConnection>;
        backgroundImage?: Maybe<Image>;
        translation?: Maybe<CategoryTranslation>;
    };

export type CategoryAncestorsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type CategoryProductsArgs = {
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type CategoryChildrenArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type CategoryBackgroundImageArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type CategoryTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CategoryBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type CategoryCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<CategoryCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type CategoryCountableEdge = {
    node: Category;
    cursor: Scalars["String"];
};

export type CategoryCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type CategoryDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type CategoryFilterInput = {
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type CategoryInput = {
    description?: Maybe<Scalars["JSONString"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    backgroundImage?: Maybe<Scalars["Upload"]>;
    backgroundImageAlt?: Maybe<Scalars["String"]>;
};

export type CategorySortField = "NAME" | "PRODUCT_COUNT" | "SUBCATEGORY_COUNT";

export type CategorySortingInput = {
    direction: OrderDirection;
    channel?: Maybe<Scalars["String"]>;
    field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    description?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<CategoryTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    category?: Maybe<Category>;
};

export type CategoryTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CategoryTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    category?: Maybe<Category>;
};

export type CategoryTranslation = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
};

export type CategoryUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type Channel = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    isActive: Scalars["Boolean"];
    slug: Scalars["String"];
    currencyCode: Scalars["String"];
    hasOrders: Scalars["Boolean"];
};

export type ChannelActivate = {
    channel?: Maybe<Channel>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
};

export type ChannelCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelCreateInput = {
    isActive?: Maybe<Scalars["Boolean"]>;
    name: Scalars["String"];
    slug: Scalars["String"];
    currencyCode: Scalars["String"];
    addShippingZones?: Maybe<Array<Scalars["ID"]>>;
};

export type ChannelDeactivate = {
    channel?: Maybe<Channel>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
};

export type ChannelDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelDeleteInput = {
    channelId: Scalars["ID"];
};

export type ChannelError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ChannelErrorCode;
    shippingZones?: Maybe<Array<Scalars["ID"]>>;
};

export type ChannelErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "CHANNELS_CURRENCY_MUST_BE_THE_SAME"
    | "CHANNEL_WITH_ORDERS"
    | "DUPLICATED_INPUT_ITEM";

export type ChannelUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelUpdateInput = {
    isActive?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    addShippingZones?: Maybe<Array<Scalars["ID"]>>;
    removeShippingZones?: Maybe<Array<Scalars["ID"]>>;
};

export type Checkout = Node &
    ObjectWithMetadata & {
        created: Scalars["DateTime"];
        lastChange: Scalars["DateTime"];
        user?: Maybe<User>;
        channel: Channel;
        billingAddress?: Maybe<Address>;
        shippingAddress?: Maybe<Address>;
        note: Scalars["String"];
        discount?: Maybe<Money>;
        discountName?: Maybe<Scalars["String"]>;
        translatedDiscountName?: Maybe<Scalars["String"]>;
        voucherCode?: Maybe<Scalars["String"]>;
        giftCards?: Maybe<Array<Maybe<GiftCard>>>;
        id: Scalars["ID"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        availableShippingMethods: Array<Maybe<ShippingMethod>>;
        availablePaymentGateways: Array<PaymentGateway>;
        email: Scalars["String"];
        isShippingRequired: Scalars["Boolean"];
        quantity: Scalars["Int"];
        lines?: Maybe<Array<Maybe<CheckoutLine>>>;
        shippingPrice?: Maybe<TaxedMoney>;
        shippingMethod?: Maybe<ShippingMethod>;
        subtotalPrice?: Maybe<TaxedMoney>;
        token: Scalars["UUID"];
        totalPrice?: Maybe<TaxedMoney>;
        languageCode: LanguageCodeEnum;
    };

export type CheckoutAddPromoCode = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutBillingAddressUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutComplete = {
    order?: Maybe<Order>;
    confirmationNeeded: Scalars["Boolean"];
    confirmationData?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<CheckoutCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type CheckoutCountableEdge = {
    node: Checkout;
    cursor: Scalars["String"];
};

export type CheckoutCreate = {
    created?: Maybe<Scalars["Boolean"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
    checkout?: Maybe<Checkout>;
};

export type CheckoutCreateInput = {
    channel?: Maybe<Scalars["String"]>;
    lines: Array<Maybe<CheckoutLineInput>>;
    email?: Maybe<Scalars["String"]>;
    shippingAddress?: Maybe<AddressInput>;
    billingAddress?: Maybe<AddressInput>;
    languageCode?: Maybe<LanguageCodeEnum>;
};

export type CheckoutCustomerAttach = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutCustomerDetach = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutEmailUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: CheckoutErrorCode;
    variants?: Maybe<Array<Scalars["ID"]>>;
    addressType?: Maybe<AddressTypeEnum>;
};

export type CheckoutErrorCode =
    | "BILLING_ADDRESS_NOT_SET"
    | "CHECKOUT_NOT_FULLY_PAID"
    | "GRAPHQL_ERROR"
    | "PRODUCT_NOT_PUBLISHED"
    | "PRODUCT_UNAVAILABLE_FOR_PURCHASE"
    | "INSUFFICIENT_STOCK"
    | "INVALID"
    | "INVALID_SHIPPING_METHOD"
    | "NOT_FOUND"
    | "PAYMENT_ERROR"
    | "QUANTITY_GREATER_THAN_LIMIT"
    | "REQUIRED"
    | "SHIPPING_ADDRESS_NOT_SET"
    | "SHIPPING_METHOD_NOT_APPLICABLE"
    | "SHIPPING_METHOD_NOT_SET"
    | "SHIPPING_NOT_REQUIRED"
    | "TAX_ERROR"
    | "UNIQUE"
    | "VOUCHER_NOT_APPLICABLE"
    | "ZERO_QUANTITY"
    | "MISSING_CHANNEL_SLUG"
    | "CHANNEL_INACTIVE"
    | "UNAVAILABLE_VARIANT_IN_CHANNEL";

export type CheckoutLanguageCodeUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLine = Node & {
    id: Scalars["ID"];
    variant: ProductVariant;
    quantity: Scalars["Int"];
    totalPrice?: Maybe<TaxedMoney>;
    requiresShipping?: Maybe<Scalars["Boolean"]>;
};

export type CheckoutLineCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<CheckoutLineCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type CheckoutLineCountableEdge = {
    node: CheckoutLine;
    cursor: Scalars["String"];
};

export type CheckoutLineDelete = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
    quantity: Scalars["Int"];
    variantId: Scalars["ID"];
};

export type CheckoutLinesAdd = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLinesUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutPaymentCreate = {
    checkout?: Maybe<Checkout>;
    payment?: Maybe<Payment>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type CheckoutRemovePromoCode = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutShippingAddressUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutShippingMethodUpdate = {
    checkout?: Maybe<Checkout>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type ChoiceValue = {
    raw?: Maybe<Scalars["String"]>;
    verbose?: Maybe<Scalars["String"]>;
};

export type Collection = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        seoTitle?: Maybe<Scalars["String"]>;
        seoDescription?: Maybe<Scalars["String"]>;
        name: Scalars["String"];
        description?: Maybe<Scalars["JSONString"]>;
        slug: Scalars["String"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
        descriptionJson?: Maybe<Scalars["JSONString"]>;
        products?: Maybe<ProductCountableConnection>;
        backgroundImage?: Maybe<Image>;
        translation?: Maybe<CollectionTranslation>;
        channelListings?: Maybe<Array<CollectionChannelListing>>;
    };

export type CollectionProductsArgs = {
    filter?: Maybe<ProductFilterInput>;
    sortBy?: Maybe<ProductOrder>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type CollectionBackgroundImageArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type CollectionTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CollectionAddProducts = {
    collection?: Maybe<Collection>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionChannelListing = Node & {
    id: Scalars["ID"];
    publicationDate?: Maybe<Scalars["Date"]>;
    isPublished: Scalars["Boolean"];
    channel: Channel;
};

export type CollectionChannelListingError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
    channels?: Maybe<Array<Scalars["ID"]>>;
};

export type CollectionChannelListingUpdate = {
    collection?: Maybe<Collection>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionChannelListingErrors: Array<CollectionChannelListingError>;
    errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
    addChannels?: Maybe<Array<PublishableChannelListingInput>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type CollectionCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<CollectionCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type CollectionCountableEdge = {
    node: Collection;
    cursor: Scalars["String"];
};

export type CollectionCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type CollectionCreateInput = {
    isPublished?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    backgroundImage?: Maybe<Scalars["Upload"]>;
    backgroundImageAlt?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    publicationDate?: Maybe<Scalars["Date"]>;
    products?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type CollectionDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type CollectionError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    products?: Maybe<Array<Scalars["ID"]>>;
    code: CollectionErrorCode;
};

export type CollectionErrorCode =
    | "DUPLICATED_INPUT_ITEM"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";

export type CollectionFilterInput = {
    published?: Maybe<CollectionPublished>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    channel?: Maybe<Scalars["String"]>;
};

export type CollectionInput = {
    isPublished?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    backgroundImage?: Maybe<Scalars["Upload"]>;
    backgroundImageAlt?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    publicationDate?: Maybe<Scalars["Date"]>;
};

export type CollectionPublished = "PUBLISHED" | "HIDDEN";

export type CollectionRemoveProducts = {
    collection?: Maybe<Collection>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionReorderProducts = {
    collection?: Maybe<Collection>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionSortField = "NAME" | "AVAILABILITY" | "PRODUCT_COUNT" | "PUBLICATION_DATE";

export type CollectionSortingInput = {
    direction: OrderDirection;
    channel?: Maybe<Scalars["String"]>;
    field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    description?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<CollectionTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    collection?: Maybe<Collection>;
};

export type CollectionTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CollectionTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    collection?: Maybe<Collection>;
};

export type CollectionTranslation = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
};

export type CollectionUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type ConfigurationItem = {
    name: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
    type?: Maybe<ConfigurationTypeFieldEnum>;
    helpText?: Maybe<Scalars["String"]>;
    label?: Maybe<Scalars["String"]>;
};

export type ConfigurationItemInput = {
    name: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
};

export type ConfigurationTypeFieldEnum =
    | "STRING"
    | "MULTILINE"
    | "BOOLEAN"
    | "SECRET"
    | "PASSWORD"
    | "SECRETMULTILINE"
    | "OUTPUT";

export type ConfirmAccount = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ConfirmEmailChange = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type CountryCode =
    | "AF"
    | "AX"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AQ"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BQ"
    | "BA"
    | "BW"
    | "BV"
    | "BR"
    | "IO"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "CV"
    | "KH"
    | "CM"
    | "CA"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CG"
    | "CD"
    | "CK"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "EU"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "GF"
    | "PF"
    | "TF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GP"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HM"
    | "VA"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MQ"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "NF"
    | "KP"
    | "MK"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "GS"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TL"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "VG"
    | "VI"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW";

export type CountryDisplay = {
    code: Scalars["String"];
    country: Scalars["String"];
    vat?: Maybe<Vat>;
};

export type CreateToken = {
    token?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
    csrfToken?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type CreditCard = {
    brand: Scalars["String"];
    firstDigits?: Maybe<Scalars["String"]>;
    lastDigits: Scalars["String"];
    expMonth?: Maybe<Scalars["Int"]>;
    expYear?: Maybe<Scalars["Int"]>;
};

export type CustomerBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type CustomerCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type CustomerDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type CustomerEvent = Node & {
    id: Scalars["ID"];
    date?: Maybe<Scalars["DateTime"]>;
    type?: Maybe<CustomerEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars["String"]>;
    count?: Maybe<Scalars["Int"]>;
    order?: Maybe<Order>;
    orderLine?: Maybe<OrderLine>;
};

export type CustomerEventsEnum =
    | "ACCOUNT_CREATED"
    | "PASSWORD_RESET_LINK_SENT"
    | "PASSWORD_RESET"
    | "EMAIL_CHANGED_REQUEST"
    | "PASSWORD_CHANGED"
    | "EMAIL_CHANGED"
    | "PLACED_ORDER"
    | "NOTE_ADDED_TO_ORDER"
    | "DIGITAL_LINK_DOWNLOADED"
    | "CUSTOMER_DELETED"
    | "NAME_ASSIGNED"
    | "EMAIL_ASSIGNED"
    | "NOTE_ADDED";

export type CustomerFilterInput = {
    dateJoined?: Maybe<DateRangeInput>;
    numberOfOrders?: Maybe<IntRangeInput>;
    placedOrders?: Maybe<DateRangeInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type CustomerInput = {
    defaultBillingAddress?: Maybe<AddressInput>;
    defaultShippingAddress?: Maybe<AddressInput>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    note?: Maybe<Scalars["String"]>;
    languageCode?: Maybe<LanguageCodeEnum>;
};

export type CustomerUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type DateRangeInput = {
    gte?: Maybe<Scalars["Date"]>;
    lte?: Maybe<Scalars["Date"]>;
};

export type DateTimeRangeInput = {
    gte?: Maybe<Scalars["DateTime"]>;
    lte?: Maybe<Scalars["DateTime"]>;
};

export type DeactivateAllUserTokens = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type DeleteMetadata = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type DeletePrivateMetadata = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type DigitalContent = Node &
    ObjectWithMetadata & {
        useDefaultSettings: Scalars["Boolean"];
        automaticFulfillment: Scalars["Boolean"];
        contentFile: Scalars["String"];
        maxDownloads?: Maybe<Scalars["Int"]>;
        urlValidDays?: Maybe<Scalars["Int"]>;
        urls?: Maybe<Array<Maybe<DigitalContentUrl>>>;
        id: Scalars["ID"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        productVariant: ProductVariant;
    };

export type DigitalContentCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<DigitalContentCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type DigitalContentCountableEdge = {
    node: DigitalContent;
    cursor: Scalars["String"];
};

export type DigitalContentCreate = {
    variant?: Maybe<ProductVariant>;
    content?: Maybe<DigitalContent>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentDelete = {
    variant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentInput = {
    useDefaultSettings: Scalars["Boolean"];
    maxDownloads?: Maybe<Scalars["Int"]>;
    urlValidDays?: Maybe<Scalars["Int"]>;
    automaticFulfillment?: Maybe<Scalars["Boolean"]>;
};

export type DigitalContentUpdate = {
    variant?: Maybe<ProductVariant>;
    content?: Maybe<DigitalContent>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentUploadInput = {
    useDefaultSettings: Scalars["Boolean"];
    maxDownloads?: Maybe<Scalars["Int"]>;
    urlValidDays?: Maybe<Scalars["Int"]>;
    automaticFulfillment?: Maybe<Scalars["Boolean"]>;
    contentFile: Scalars["Upload"];
};

export type DigitalContentUrl = Node & {
    content: DigitalContent;
    created: Scalars["DateTime"];
    downloadNum: Scalars["Int"];
    id: Scalars["ID"];
    url?: Maybe<Scalars["String"]>;
    token: Scalars["UUID"];
};

export type DigitalContentUrlCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    digitalContentUrl?: Maybe<DigitalContentUrl>;
};

export type DigitalContentUrlCreateInput = {
    content: Scalars["ID"];
};

export type DiscountError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    products?: Maybe<Array<Scalars["ID"]>>;
    code: DiscountErrorCode;
    channels?: Maybe<Array<Scalars["ID"]>>;
};

export type DiscountErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
    | "DUPLICATED_INPUT_ITEM";

export type DiscountStatusEnum = "ACTIVE" | "EXPIRED" | "SCHEDULED";

export type DiscountValueTypeEnum = "FIXED" | "PERCENTAGE";

export type DistanceUnitsEnum = "CM" | "M" | "KM" | "FT" | "YD" | "INCH";

export type Domain = {
    host: Scalars["String"];
    sslEnabled: Scalars["Boolean"];
    url: Scalars["String"];
};

export type DraftOrderBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderComplete = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type DraftOrderCreateInput = {
    billingAddress?: Maybe<AddressInput>;
    user?: Maybe<Scalars["ID"]>;
    userEmail?: Maybe<Scalars["String"]>;
    discount?: Maybe<Scalars["PositiveDecimal"]>;
    shippingAddress?: Maybe<AddressInput>;
    shippingMethod?: Maybe<Scalars["ID"]>;
    voucher?: Maybe<Scalars["ID"]>;
    customerNote?: Maybe<Scalars["String"]>;
    channelId?: Maybe<Scalars["ID"]>;
    redirectUrl?: Maybe<Scalars["String"]>;
    lines?: Maybe<Array<Maybe<OrderLineCreateInput>>>;
};

export type DraftOrderDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type DraftOrderInput = {
    billingAddress?: Maybe<AddressInput>;
    user?: Maybe<Scalars["ID"]>;
    userEmail?: Maybe<Scalars["String"]>;
    discount?: Maybe<Scalars["PositiveDecimal"]>;
    shippingAddress?: Maybe<AddressInput>;
    shippingMethod?: Maybe<Scalars["ID"]>;
    voucher?: Maybe<Scalars["ID"]>;
    customerNote?: Maybe<Scalars["String"]>;
    channelId?: Maybe<Scalars["ID"]>;
    redirectUrl?: Maybe<Scalars["String"]>;
};

export type DraftOrderLinesBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type ExportError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ExportErrorCode;
};

export type ExportErrorCode = "GRAPHQL_ERROR" | "INVALID" | "NOT_FOUND" | "REQUIRED";

export type ExportEvent = Node & {
    id: Scalars["ID"];
    date: Scalars["DateTime"];
    type: ExportEventsEnum;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message: Scalars["String"];
};

export type ExportEventsEnum =
    | "EXPORT_PENDING"
    | "EXPORT_SUCCESS"
    | "EXPORT_FAILED"
    | "EXPORT_DELETED"
    | "EXPORTED_FILE_SENT"
    | "EXPORT_FAILED_INFO_SENT";

export type ExportFile = Node &
    Job & {
        id: Scalars["ID"];
        user?: Maybe<User>;
        app?: Maybe<App>;
        status: JobStatusEnum;
        createdAt: Scalars["DateTime"];
        updatedAt: Scalars["DateTime"];
        message?: Maybe<Scalars["String"]>;
        url?: Maybe<Scalars["String"]>;
        events?: Maybe<Array<ExportEvent>>;
    };

export type ExportFileCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<ExportFileCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ExportFileCountableEdge = {
    node: ExportFile;
    cursor: Scalars["String"];
};

export type ExportFileFilterInput = {
    createdAt?: Maybe<DateTimeRangeInput>;
    updatedAt?: Maybe<DateTimeRangeInput>;
    status?: Maybe<JobStatusEnum>;
    user?: Maybe<Scalars["String"]>;
    app?: Maybe<Scalars["String"]>;
};

export type ExportFileSortField = "STATUS" | "CREATED_AT" | "UPDATED_AT";

export type ExportFileSortingInput = {
    direction: OrderDirection;
    field: ExportFileSortField;
};

export type ExportInfoInput = {
    attributes?: Maybe<Array<Scalars["ID"]>>;
    warehouses?: Maybe<Array<Scalars["ID"]>>;
    channels?: Maybe<Array<Scalars["ID"]>>;
    fields?: Maybe<Array<ProductFieldEnum>>;
};

export type ExportProducts = {
    exportFile?: Maybe<ExportFile>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    exportErrors: Array<ExportError>;
    errors: Array<ExportError>;
};

export type ExportProductsInput = {
    scope: ExportScope;
    filter?: Maybe<ProductFilterInput>;
    ids?: Maybe<Array<Scalars["ID"]>>;
    exportInfo?: Maybe<ExportInfoInput>;
    fileType: FileTypesEnum;
};

export type ExportScope = "ALL" | "IDS" | "FILTER";

export type ExternalAuthentication = {
    id: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
};

export type ExternalAuthenticationUrl = {
    authenticationData?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalLogout = {
    logoutData?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalObtainAccessTokens = {
    token?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
    csrfToken?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalRefresh = {
    token?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
    csrfToken?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalVerify = {
    user?: Maybe<User>;
    isValid: Scalars["Boolean"];
    verifyData?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type File = {
    url: Scalars["String"];
    contentType?: Maybe<Scalars["String"]>;
};

export type FileTypesEnum = "CSV" | "XLSX";

export type FileUpload = {
    uploadedFile?: Maybe<File>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    uploadErrors: Array<UploadError>;
    errors: Array<UploadError>;
};

export type Fulfillment = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        fulfillmentOrder: Scalars["Int"];
        status: FulfillmentStatus;
        trackingNumber: Scalars["String"];
        created: Scalars["DateTime"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        lines?: Maybe<Array<Maybe<FulfillmentLine>>>;
        statusDisplay?: Maybe<Scalars["String"]>;
        warehouse?: Maybe<Warehouse>;
    };

export type FulfillmentCancel = {
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
    warehouseId: Scalars["ID"];
};

export type FulfillmentLine = Node & {
    id: Scalars["ID"];
    quantity: Scalars["Int"];
    orderLine?: Maybe<OrderLine>;
};

export type FulfillmentRefundProducts = {
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentReturnProducts = {
    returnFulfillment?: Maybe<Fulfillment>;
    replaceFulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    replaceOrder?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentStatus =
    | "FULFILLED"
    | "REFUNDED"
    | "RETURNED"
    | "REPLACED"
    | "REFUNDED_AND_RETURNED"
    | "CANCELED";

export type FulfillmentUpdateTracking = {
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
    trackingNumber?: Maybe<Scalars["String"]>;
    notifyCustomer?: Maybe<Scalars["Boolean"]>;
};

export type GatewayConfigLine = {
    field: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
};

export type GiftCard = Node &
    ObjectWithMetadata & {
        code: Scalars["String"];
        isActive: Scalars["Boolean"];
        expiryDate?: Maybe<Scalars["Date"]>;
        expiryType: GiftCardExpiryTypeEnum;
        tag?: Maybe<Scalars["String"]>;
        created: Scalars["DateTime"];
        lastUsedOn?: Maybe<Scalars["DateTime"]>;
        initialBalance?: Maybe<Money>;
        currentBalance?: Maybe<Money>;
        id: Scalars["ID"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        displayCode: Scalars["String"];
        createdBy?: Maybe<User>;
        usedBy?: Maybe<User>;
        createdByEmail?: Maybe<Scalars["String"]>;
        usedByEmail?: Maybe<Scalars["String"]>;
        app?: Maybe<App>;
        expiryPeriod?: Maybe<TimePeriod>;
        product?: Maybe<Product>;
        events: Array<GiftCardEvent>;
        /** @deprecated Will be removed in Saleor 4.0. Use created_by field instead */
        user?: Maybe<User>;
        /** @deprecated Will be removed in Saleor 4.0. Use expiry_date field instead. */
        endDate?: Maybe<Scalars["DateTime"]>;
        /** @deprecated Will be removed in Saleor 4.0. */
        startDate?: Maybe<Scalars["DateTime"]>;
    };

export type GiftCardActivate = {
    giftCard?: Maybe<GiftCard>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<GiftCardCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type GiftCardCountableEdge = {
    node: GiftCard;
    cursor: Scalars["String"];
};

export type GiftCardCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardCreateInput = {
    tag?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
    balance: PriceInput;
    userEmail?: Maybe<Scalars["String"]>;
    expirySettings: GiftCardExpirySettingsInput;
    code?: Maybe<Scalars["String"]>;
    note?: Maybe<Scalars["String"]>;
};

export type GiftCardDeactivate = {
    giftCard?: Maybe<GiftCard>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
};

export type GiftCardDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: GiftCardErrorCode;
};

export type GiftCardErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type GiftCardEvent = Node & {
    id: Scalars["ID"];
    date?: Maybe<Scalars["DateTime"]>;
    type?: Maybe<GiftCardEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    orderId?: Maybe<Scalars["ID"]>;
    orderNumber?: Maybe<Scalars["String"]>;
    tag?: Maybe<Scalars["String"]>;
    oldTag?: Maybe<Scalars["String"]>;
    balance?: Maybe<GiftCardEventBalance>;
    expiry?: Maybe<GiftCardEventExpiry>;
};

export type GiftCardEventBalance = {
    initialBalance: Money;
    currentBalance: Money;
    oldInitialBalance?: Maybe<Money>;
    oldCurrentBalance?: Maybe<Money>;
};

export type GiftCardEventExpiry = {
    expiryType?: Maybe<GiftCardExpiryTypeEnum>;
    expiryPeriod?: Maybe<TimePeriod>;
    expiryDate?: Maybe<Scalars["Date"]>;
    oldExpiryType?: Maybe<GiftCardExpiryTypeEnum>;
    oldExpiryPeriod?: Maybe<TimePeriod>;
    oldExpiryDate?: Maybe<Scalars["Date"]>;
};

export type GiftCardEventsEnum =
    | "ISSUED"
    | "BOUGHT"
    | "UPDATED"
    | "ACTIVATED"
    | "DEACTIVATED"
    | "BALANCE_RESET"
    | "EXPIRY_SETTINGS_UPDATED"
    | "SENT_TO_CUSTOMER"
    | "RESENT";

export type GiftCardExpirySettingsInput = {
    expiryType: GiftCardExpiryTypeEnum;
    expiryDate?: Maybe<Scalars["Date"]>;
    expiryPeriod?: Maybe<TimePeriodInputType>;
};

export type GiftCardExpiryTypeEnum = "NEVER_EXPIRE" | "EXPIRY_PERIOD" | "EXPIRY_DATE";

export type GiftCardFilterInput = {
    tag?: Maybe<Scalars["String"]>;
};

export type GiftCardUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardUpdateInput = {
    tag?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
    balanceAmount?: Maybe<Scalars["PositiveDecimal"]>;
    expirySettings?: Maybe<GiftCardExpirySettingsInput>;
};

export type Group = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    permissions?: Maybe<Array<Maybe<Permission>>>;
    users?: Maybe<Array<Maybe<User>>>;
    userCanManage: Scalars["Boolean"];
};

export type GroupCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<GroupCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type GroupCountableEdge = {
    node: Group;
    cursor: Scalars["String"];
};

export type Image = {
    url: Scalars["String"];
    alt?: Maybe<Scalars["String"]>;
};

export type IntRangeInput = {
    gte?: Maybe<Scalars["Int"]>;
    lte?: Maybe<Scalars["Int"]>;
};

export type Invoice = ObjectWithMetadata &
    Job &
    Node & {
        id: Scalars["ID"];
        metadata: Array<Maybe<MetadataItem>>;
        status: JobStatusEnum;
        number?: Maybe<Scalars["String"]>;
        externalUrl?: Maybe<Scalars["String"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        createdAt: Scalars["DateTime"];
        updatedAt: Scalars["DateTime"];
        message?: Maybe<Scalars["String"]>;
        url?: Maybe<Scalars["String"]>;
    };

export type InvoiceCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceCreateInput = {
    number: Scalars["String"];
    url: Scalars["String"];
};

export type InvoiceDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: InvoiceErrorCode;
};

export type InvoiceErrorCode =
    | "REQUIRED"
    | "NOT_READY"
    | "URL_NOT_SET"
    | "EMAIL_NOT_SET"
    | "NUMBER_NOT_SET"
    | "NOT_FOUND"
    | "INVALID_STATUS";

export type InvoiceRequest = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceRequestDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceSendNotification = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type Job = {
    status: JobStatusEnum;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    message?: Maybe<Scalars["String"]>;
};

export type JobStatusEnum = "PENDING" | "SUCCESS" | "FAILED" | "DELETED";

export type LanguageCodeEnum =
    | "AR"
    | "AZ"
    | "BG"
    | "BN"
    | "CA"
    | "CS"
    | "DA"
    | "DE"
    | "EL"
    | "EN"
    | "ES"
    | "ES_CO"
    | "ET"
    | "FA"
    | "FI"
    | "FR"
    | "HI"
    | "HU"
    | "HY"
    | "ID"
    | "IS"
    | "IT"
    | "JA"
    | "KA"
    | "KM"
    | "KO"
    | "LT"
    | "MN"
    | "MY"
    | "NB"
    | "NL"
    | "PL"
    | "PT"
    | "PT_BR"
    | "RO"
    | "RU"
    | "SK"
    | "SL"
    | "SQ"
    | "SR"
    | "SV"
    | "SW"
    | "TA"
    | "TH"
    | "TR"
    | "UK"
    | "VI"
    | "ZH_HANS"
    | "ZH_HANT";

export type LanguageDisplay = {
    code: LanguageCodeEnum;
    language: Scalars["String"];
};

export type LimitInfo = {
    currentUsage: Limits;
    allowedUsage: Limits;
};

export type Limits = {
    channels?: Maybe<Scalars["Int"]>;
    orders?: Maybe<Scalars["Int"]>;
    productVariants?: Maybe<Scalars["Int"]>;
    staffUsers?: Maybe<Scalars["Int"]>;
    warehouses?: Maybe<Scalars["Int"]>;
};

export type Manifest = {
    identifier: Scalars["String"];
    version: Scalars["String"];
    name: Scalars["String"];
    about?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<Permission>>>;
    appUrl?: Maybe<Scalars["String"]>;
    configurationUrl?: Maybe<Scalars["String"]>;
    tokenTargetUrl?: Maybe<Scalars["String"]>;
    dataPrivacy?: Maybe<Scalars["String"]>;
    dataPrivacyUrl?: Maybe<Scalars["String"]>;
    homepageUrl?: Maybe<Scalars["String"]>;
    supportUrl?: Maybe<Scalars["String"]>;
};

export type Margin = {
    start?: Maybe<Scalars["Int"]>;
    stop?: Maybe<Scalars["Int"]>;
};

export type MeasurementUnitsEnum =
    | "CM"
    | "M"
    | "KM"
    | "FT"
    | "YD"
    | "INCH"
    | "SQ_CM"
    | "SQ_M"
    | "SQ_KM"
    | "SQ_FT"
    | "SQ_YD"
    | "SQ_INCH"
    | "CUBIC_MILLIMETER"
    | "CUBIC_CENTIMETER"
    | "CUBIC_DECIMETER"
    | "CUBIC_METER"
    | "LITER"
    | "CUBIC_FOOT"
    | "CUBIC_INCH"
    | "CUBIC_YARD"
    | "QT"
    | "PINT"
    | "FL_OZ"
    | "ACRE_IN"
    | "ACRE_FT"
    | "G"
    | "LB"
    | "OZ"
    | "KG"
    | "TONNE";

export type Menu = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        slug: Scalars["String"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        items?: Maybe<Array<Maybe<MenuItem>>>;
    };

export type MenuBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<MenuCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type MenuCountableEdge = {
    node: Menu;
    cursor: Scalars["String"];
};

export type MenuCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MenuCreateInput = {
    name: Scalars["String"];
    slug?: Maybe<Scalars["String"]>;
    items?: Maybe<Array<Maybe<MenuItemInput>>>;
};

export type MenuDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MenuError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: MenuErrorCode;
};

export type MenuErrorCode =
    | "CANNOT_ASSIGN_NODE"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "INVALID_MENU_ITEM"
    | "NO_MENU_ITEM_PROVIDED"
    | "NOT_FOUND"
    | "REQUIRED"
    | "TOO_MANY_MENU_ITEMS"
    | "UNIQUE";

export type MenuFilterInput = {
    search?: Maybe<Scalars["String"]>;
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type MenuInput = {
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

export type MenuItem = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        menu: Menu;
        parent?: Maybe<MenuItem>;
        category?: Maybe<Category>;
        collection?: Maybe<Collection>;
        page?: Maybe<Page>;
        level: Scalars["Int"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        children?: Maybe<Array<Maybe<MenuItem>>>;
        url?: Maybe<Scalars["String"]>;
        translation?: Maybe<MenuItemTranslation>;
    };

export type MenuItemTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type MenuItemBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<MenuItemCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type MenuItemCountableEdge = {
    node: MenuItem;
    cursor: Scalars["String"];
};

export type MenuItemCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
    name: Scalars["String"];
    url?: Maybe<Scalars["String"]>;
    category?: Maybe<Scalars["ID"]>;
    collection?: Maybe<Scalars["ID"]>;
    page?: Maybe<Scalars["ID"]>;
    menu: Scalars["ID"];
    parent?: Maybe<Scalars["ID"]>;
};

export type MenuItemDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemFilterInput = {
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type MenuItemInput = {
    name?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
    category?: Maybe<Scalars["ID"]>;
    collection?: Maybe<Scalars["ID"]>;
    page?: Maybe<Scalars["ID"]>;
};

export type MenuItemMove = {
    menu?: Maybe<Menu>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuItemMoveInput = {
    itemId: Scalars["ID"];
    parentId?: Maybe<Scalars["ID"]>;
    sortOrder?: Maybe<Scalars["Int"]>;
};

export type MenuItemSortingInput = {
    direction: OrderDirection;
    field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    translation?: Maybe<MenuItemTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type MenuItemTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemTranslation = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    language: LanguageDisplay;
};

export type MenuItemUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemsSortField = "NAME";

export type MenuSortField = "NAME" | "ITEMS_COUNT";

export type MenuSortingInput = {
    direction: OrderDirection;
    field: MenuSortField;
};

export type MenuUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MetadataError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: MetadataErrorCode;
};

export type MetadataErrorCode = "GRAPHQL_ERROR" | "INVALID" | "NOT_FOUND" | "REQUIRED";

export type MetadataFilter = {
    key: Scalars["String"];
    value?: Maybe<Scalars["String"]>;
};

export type MetadataInput = {
    key: Scalars["String"];
    value: Scalars["String"];
};

export type MetadataItem = {
    key: Scalars["String"];
    value: Scalars["String"];
};

export type Money = {
    currency: Scalars["String"];
    amount: Scalars["Float"];
};

export type MoneyRange = {
    start?: Maybe<Money>;
    stop?: Maybe<Money>;
};

export type MoveProductInput = {
    productId: Scalars["ID"];
    sortOrder?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
    webhookCreate?: Maybe<WebhookCreate>;
    webhookDelete?: Maybe<WebhookDelete>;
    webhookUpdate?: Maybe<WebhookUpdate>;
    createWarehouse?: Maybe<WarehouseCreate>;
    updateWarehouse?: Maybe<WarehouseUpdate>;
    deleteWarehouse?: Maybe<WarehouseDelete>;
    assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
    unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
    staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
    staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
    staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
    shopDomainUpdate?: Maybe<ShopDomainUpdate>;
    shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
    shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
    shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
    shopAddressUpdate?: Maybe<ShopAddressUpdate>;
    orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
    shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
    shippingPriceCreate?: Maybe<ShippingPriceCreate>;
    shippingPriceDelete?: Maybe<ShippingPriceDelete>;
    shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
    shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
    shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
    shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
    shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
    shippingZoneCreate?: Maybe<ShippingZoneCreate>;
    shippingZoneDelete?: Maybe<ShippingZoneDelete>;
    shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
    shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
    productAttributeAssign?: Maybe<ProductAttributeAssign>;
    productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
    categoryCreate?: Maybe<CategoryCreate>;
    categoryDelete?: Maybe<CategoryDelete>;
    categoryBulkDelete?: Maybe<CategoryBulkDelete>;
    categoryUpdate?: Maybe<CategoryUpdate>;
    categoryTranslate?: Maybe<CategoryTranslate>;
    collectionAddProducts?: Maybe<CollectionAddProducts>;
    collectionCreate?: Maybe<CollectionCreate>;
    collectionDelete?: Maybe<CollectionDelete>;
    collectionReorderProducts?: Maybe<CollectionReorderProducts>;
    collectionBulkDelete?: Maybe<CollectionBulkDelete>;
    collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
    collectionUpdate?: Maybe<CollectionUpdate>;
    collectionTranslate?: Maybe<CollectionTranslate>;
    collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
    productCreate?: Maybe<ProductCreate>;
    productDelete?: Maybe<ProductDelete>;
    productBulkDelete?: Maybe<ProductBulkDelete>;
    productUpdate?: Maybe<ProductUpdate>;
    productTranslate?: Maybe<ProductTranslate>;
    productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
    productMediaCreate?: Maybe<ProductMediaCreate>;
    productVariantReorder?: Maybe<ProductVariantReorder>;
    productMediaDelete?: Maybe<ProductMediaDelete>;
    productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
    productMediaReorder?: Maybe<ProductMediaReorder>;
    productMediaUpdate?: Maybe<ProductMediaUpdate>;
    productTypeCreate?: Maybe<ProductTypeCreate>;
    productTypeDelete?: Maybe<ProductTypeDelete>;
    productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
    productTypeUpdate?: Maybe<ProductTypeUpdate>;
    productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
    productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
    digitalContentCreate?: Maybe<DigitalContentCreate>;
    digitalContentDelete?: Maybe<DigitalContentDelete>;
    digitalContentUpdate?: Maybe<DigitalContentUpdate>;
    digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
    productVariantCreate?: Maybe<ProductVariantCreate>;
    productVariantDelete?: Maybe<ProductVariantDelete>;
    productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
    productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
    productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
    productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
    productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
    productVariantUpdate?: Maybe<ProductVariantUpdate>;
    productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
    productVariantTranslate?: Maybe<ProductVariantTranslate>;
    productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
    productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
    variantMediaAssign?: Maybe<VariantMediaAssign>;
    variantMediaUnassign?: Maybe<VariantMediaUnassign>;
    paymentCapture?: Maybe<PaymentCapture>;
    paymentRefund?: Maybe<PaymentRefund>;
    paymentVoid?: Maybe<PaymentVoid>;
    paymentInitialize?: Maybe<PaymentInitialize>;
    pageCreate?: Maybe<PageCreate>;
    pageDelete?: Maybe<PageDelete>;
    pageBulkDelete?: Maybe<PageBulkDelete>;
    pageBulkPublish?: Maybe<PageBulkPublish>;
    pageUpdate?: Maybe<PageUpdate>;
    pageTranslate?: Maybe<PageTranslate>;
    pageTypeCreate?: Maybe<PageTypeCreate>;
    pageTypeUpdate?: Maybe<PageTypeUpdate>;
    pageTypeDelete?: Maybe<PageTypeDelete>;
    pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
    pageAttributeAssign?: Maybe<PageAttributeAssign>;
    pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
    pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
    pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
    draftOrderComplete?: Maybe<DraftOrderComplete>;
    draftOrderCreate?: Maybe<DraftOrderCreate>;
    draftOrderDelete?: Maybe<DraftOrderDelete>;
    draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
    draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
    draftOrderUpdate?: Maybe<DraftOrderUpdate>;
    orderAddNote?: Maybe<OrderAddNote>;
    orderCancel?: Maybe<OrderCancel>;
    orderCapture?: Maybe<OrderCapture>;
    orderConfirm?: Maybe<OrderConfirm>;
    orderFulfill?: Maybe<OrderFulfill>;
    orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
    orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
    orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
    orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
    orderLinesCreate?: Maybe<OrderLinesCreate>;
    orderLineDelete?: Maybe<OrderLineDelete>;
    orderLineUpdate?: Maybe<OrderLineUpdate>;
    orderDiscountAdd?: Maybe<OrderDiscountAdd>;
    orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
    orderDiscountDelete?: Maybe<OrderDiscountDelete>;
    orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
    orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
    orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
    orderRefund?: Maybe<OrderRefund>;
    orderUpdate?: Maybe<OrderUpdate>;
    orderUpdateShipping?: Maybe<OrderUpdateShipping>;
    orderVoid?: Maybe<OrderVoid>;
    orderBulkCancel?: Maybe<OrderBulkCancel>;
    deleteMetadata?: Maybe<DeleteMetadata>;
    deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
    updateMetadata?: Maybe<UpdateMetadata>;
    updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
    assignNavigation?: Maybe<AssignNavigation>;
    menuCreate?: Maybe<MenuCreate>;
    menuDelete?: Maybe<MenuDelete>;
    menuBulkDelete?: Maybe<MenuBulkDelete>;
    menuUpdate?: Maybe<MenuUpdate>;
    menuItemCreate?: Maybe<MenuItemCreate>;
    menuItemDelete?: Maybe<MenuItemDelete>;
    menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
    menuItemUpdate?: Maybe<MenuItemUpdate>;
    menuItemTranslate?: Maybe<MenuItemTranslate>;
    menuItemMove?: Maybe<MenuItemMove>;
    invoiceRequest?: Maybe<InvoiceRequest>;
    invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
    invoiceCreate?: Maybe<InvoiceCreate>;
    invoiceDelete?: Maybe<InvoiceDelete>;
    invoiceUpdate?: Maybe<InvoiceUpdate>;
    invoiceSendNotification?: Maybe<InvoiceSendNotification>;
    giftCardActivate?: Maybe<GiftCardActivate>;
    giftCardCreate?: Maybe<GiftCardCreate>;
    giftCardDelete?: Maybe<GiftCardDelete>;
    giftCardDeactivate?: Maybe<GiftCardDeactivate>;
    giftCardUpdate?: Maybe<GiftCardUpdate>;
    pluginUpdate?: Maybe<PluginUpdate>;
    saleCreate?: Maybe<SaleCreate>;
    saleDelete?: Maybe<SaleDelete>;
    saleBulkDelete?: Maybe<SaleBulkDelete>;
    saleUpdate?: Maybe<SaleUpdate>;
    saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
    saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
    saleTranslate?: Maybe<SaleTranslate>;
    saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
    voucherCreate?: Maybe<VoucherCreate>;
    voucherDelete?: Maybe<VoucherDelete>;
    voucherBulkDelete?: Maybe<VoucherBulkDelete>;
    voucherUpdate?: Maybe<VoucherUpdate>;
    voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
    voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
    voucherTranslate?: Maybe<VoucherTranslate>;
    voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
    exportProducts?: Maybe<ExportProducts>;
    fileUpload?: Maybe<FileUpload>;
    checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
    checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
    checkoutComplete?: Maybe<CheckoutComplete>;
    checkoutCreate?: Maybe<CheckoutCreate>;
    checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
    checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
    checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
    checkoutLineDelete?: Maybe<CheckoutLineDelete>;
    checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
    checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
    checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
    checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
    checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
    checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
    checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
    channelCreate?: Maybe<ChannelCreate>;
    channelUpdate?: Maybe<ChannelUpdate>;
    channelDelete?: Maybe<ChannelDelete>;
    channelActivate?: Maybe<ChannelActivate>;
    channelDeactivate?: Maybe<ChannelDeactivate>;
    attributeCreate?: Maybe<AttributeCreate>;
    attributeDelete?: Maybe<AttributeDelete>;
    attributeUpdate?: Maybe<AttributeUpdate>;
    attributeTranslate?: Maybe<AttributeTranslate>;
    attributeBulkDelete?: Maybe<AttributeBulkDelete>;
    attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
    attributeValueCreate?: Maybe<AttributeValueCreate>;
    attributeValueDelete?: Maybe<AttributeValueDelete>;
    attributeValueUpdate?: Maybe<AttributeValueUpdate>;
    attributeValueTranslate?: Maybe<AttributeValueTranslate>;
    attributeReorderValues?: Maybe<AttributeReorderValues>;
    appCreate?: Maybe<AppCreate>;
    appUpdate?: Maybe<AppUpdate>;
    appDelete?: Maybe<AppDelete>;
    appTokenCreate?: Maybe<AppTokenCreate>;
    appTokenDelete?: Maybe<AppTokenDelete>;
    appTokenVerify?: Maybe<AppTokenVerify>;
    appInstall?: Maybe<AppInstall>;
    appRetryInstall?: Maybe<AppRetryInstall>;
    appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
    appFetchManifest?: Maybe<AppFetchManifest>;
    appActivate?: Maybe<AppActivate>;
    appDeactivate?: Maybe<AppDeactivate>;
    tokenCreate?: Maybe<CreateToken>;
    tokenRefresh?: Maybe<RefreshToken>;
    tokenVerify?: Maybe<VerifyToken>;
    tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
    externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
    externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
    externalRefresh?: Maybe<ExternalRefresh>;
    externalLogout?: Maybe<ExternalLogout>;
    externalVerify?: Maybe<ExternalVerify>;
    requestPasswordReset?: Maybe<RequestPasswordReset>;
    confirmAccount?: Maybe<ConfirmAccount>;
    setPassword?: Maybe<SetPassword>;
    passwordChange?: Maybe<PasswordChange>;
    requestEmailChange?: Maybe<RequestEmailChange>;
    confirmEmailChange?: Maybe<ConfirmEmailChange>;
    accountAddressCreate?: Maybe<AccountAddressCreate>;
    accountAddressUpdate?: Maybe<AccountAddressUpdate>;
    accountAddressDelete?: Maybe<AccountAddressDelete>;
    accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
    accountRegister?: Maybe<AccountRegister>;
    accountUpdate?: Maybe<AccountUpdate>;
    accountRequestDeletion?: Maybe<AccountRequestDeletion>;
    accountDelete?: Maybe<AccountDelete>;
    addressCreate?: Maybe<AddressCreate>;
    addressUpdate?: Maybe<AddressUpdate>;
    addressDelete?: Maybe<AddressDelete>;
    addressSetDefault?: Maybe<AddressSetDefault>;
    customerCreate?: Maybe<CustomerCreate>;
    customerUpdate?: Maybe<CustomerUpdate>;
    customerDelete?: Maybe<CustomerDelete>;
    customerBulkDelete?: Maybe<CustomerBulkDelete>;
    staffCreate?: Maybe<StaffCreate>;
    staffUpdate?: Maybe<StaffUpdate>;
    staffDelete?: Maybe<StaffDelete>;
    staffBulkDelete?: Maybe<StaffBulkDelete>;
    userAvatarUpdate?: Maybe<UserAvatarUpdate>;
    userAvatarDelete?: Maybe<UserAvatarDelete>;
    userBulkSetActive?: Maybe<UserBulkSetActive>;
    permissionGroupCreate?: Maybe<PermissionGroupCreate>;
    permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
    permissionGroupDelete?: Maybe<PermissionGroupDelete>;
};

export type MutationWebhookCreateArgs = {
    input: WebhookCreateInput;
};

export type MutationWebhookDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationWebhookUpdateArgs = {
    id: Scalars["ID"];
    input: WebhookUpdateInput;
};

export type MutationCreateWarehouseArgs = {
    input: WarehouseCreateInput;
};

export type MutationUpdateWarehouseArgs = {
    id: Scalars["ID"];
    input: WarehouseUpdateInput;
};

export type MutationDeleteWarehouseArgs = {
    id: Scalars["ID"];
};

export type MutationAssignWarehouseShippingZoneArgs = {
    id: Scalars["ID"];
    shippingZoneIds: Array<Scalars["ID"]>;
};

export type MutationUnassignWarehouseShippingZoneArgs = {
    id: Scalars["ID"];
    shippingZoneIds: Array<Scalars["ID"]>;
};

export type MutationStaffNotificationRecipientCreateArgs = {
    input: StaffNotificationRecipientInput;
};

export type MutationStaffNotificationRecipientUpdateArgs = {
    id: Scalars["ID"];
    input: StaffNotificationRecipientInput;
};

export type MutationStaffNotificationRecipientDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationShopDomainUpdateArgs = {
    input?: Maybe<SiteDomainInput>;
};

export type MutationShopSettingsUpdateArgs = {
    input: ShopSettingsInput;
};

export type MutationShopSettingsTranslateArgs = {
    input: ShopSettingsTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationShopAddressUpdateArgs = {
    input?: Maybe<AddressInput>;
};

export type MutationOrderSettingsUpdateArgs = {
    input: OrderSettingsUpdateInput;
};

export type MutationShippingMethodChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: ShippingMethodChannelListingInput;
};

export type MutationShippingPriceCreateArgs = {
    input: ShippingPriceInput;
};

export type MutationShippingPriceDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationShippingPriceBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationShippingPriceUpdateArgs = {
    id: Scalars["ID"];
    input: ShippingPriceInput;
};

export type MutationShippingPriceTranslateArgs = {
    id: Scalars["ID"];
    input: ShippingPriceTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationShippingPriceExcludeProductsArgs = {
    id: Scalars["ID"];
    input: ShippingPriceExcludeProductsInput;
};

export type MutationShippingPriceRemoveProductFromExcludeArgs = {
    id: Scalars["ID"];
    products: Array<Maybe<Scalars["ID"]>>;
};

export type MutationShippingZoneCreateArgs = {
    input: ShippingZoneCreateInput;
};

export type MutationShippingZoneDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationShippingZoneBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationShippingZoneUpdateArgs = {
    id: Scalars["ID"];
    input: ShippingZoneUpdateInput;
};

export type MutationProductAttributeAssignArgs = {
    operations: Array<Maybe<ProductAttributeAssignInput>>;
    productTypeId: Scalars["ID"];
};

export type MutationProductAttributeUnassignArgs = {
    attributeIds: Array<Maybe<Scalars["ID"]>>;
    productTypeId: Scalars["ID"];
};

export type MutationCategoryCreateArgs = {
    input: CategoryInput;
    parent?: Maybe<Scalars["ID"]>;
};

export type MutationCategoryDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationCategoryBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCategoryUpdateArgs = {
    id: Scalars["ID"];
    input: CategoryInput;
};

export type MutationCategoryTranslateArgs = {
    id: Scalars["ID"];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationCollectionAddProductsArgs = {
    collectionId: Scalars["ID"];
    products: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCollectionCreateArgs = {
    input: CollectionCreateInput;
};

export type MutationCollectionDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationCollectionReorderProductsArgs = {
    collectionId: Scalars["ID"];
    moves: Array<Maybe<MoveProductInput>>;
};

export type MutationCollectionBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCollectionRemoveProductsArgs = {
    collectionId: Scalars["ID"];
    products: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCollectionUpdateArgs = {
    id: Scalars["ID"];
    input: CollectionInput;
};

export type MutationCollectionTranslateArgs = {
    id: Scalars["ID"];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationCollectionChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: CollectionChannelListingUpdateInput;
};

export type MutationProductCreateArgs = {
    input: ProductCreateInput;
};

export type MutationProductDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationProductBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationProductUpdateArgs = {
    id: Scalars["ID"];
    input: ProductInput;
};

export type MutationProductTranslateArgs = {
    id: Scalars["ID"];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationProductChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: ProductChannelListingUpdateInput;
};

export type MutationProductMediaCreateArgs = {
    input: ProductMediaCreateInput;
};

export type MutationProductVariantReorderArgs = {
    moves: Array<Maybe<ReorderInput>>;
    productId: Scalars["ID"];
};

export type MutationProductMediaDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationProductMediaBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationProductMediaReorderArgs = {
    mediaIds: Array<Maybe<Scalars["ID"]>>;
    productId: Scalars["ID"];
};

export type MutationProductMediaUpdateArgs = {
    id: Scalars["ID"];
    input: ProductMediaUpdateInput;
};

export type MutationProductTypeCreateArgs = {
    input: ProductTypeInput;
};

export type MutationProductTypeDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationProductTypeBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationProductTypeUpdateArgs = {
    id: Scalars["ID"];
    input: ProductTypeInput;
};

export type MutationProductTypeReorderAttributesArgs = {
    moves: Array<Maybe<ReorderInput>>;
    productTypeId: Scalars["ID"];
    type: ProductAttributeType;
};

export type MutationProductReorderAttributeValuesArgs = {
    attributeId: Scalars["ID"];
    moves: Array<Maybe<ReorderInput>>;
    productId: Scalars["ID"];
};

export type MutationDigitalContentCreateArgs = {
    input: DigitalContentUploadInput;
    variantId: Scalars["ID"];
};

export type MutationDigitalContentDeleteArgs = {
    variantId: Scalars["ID"];
};

export type MutationDigitalContentUpdateArgs = {
    input: DigitalContentInput;
    variantId: Scalars["ID"];
};

export type MutationDigitalContentUrlCreateArgs = {
    input: DigitalContentUrlCreateInput;
};

export type MutationProductVariantCreateArgs = {
    input: ProductVariantCreateInput;
};

export type MutationProductVariantDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationProductVariantBulkCreateArgs = {
    product: Scalars["ID"];
    variants: Array<Maybe<ProductVariantBulkCreateInput>>;
};

export type MutationProductVariantBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationProductVariantStocksCreateArgs = {
    stocks: Array<StockInput>;
    variantId: Scalars["ID"];
};

export type MutationProductVariantStocksDeleteArgs = {
    variantId: Scalars["ID"];
    warehouseIds?: Maybe<Array<Scalars["ID"]>>;
};

export type MutationProductVariantStocksUpdateArgs = {
    stocks: Array<StockInput>;
    variantId: Scalars["ID"];
};

export type MutationProductVariantUpdateArgs = {
    id: Scalars["ID"];
    input: ProductVariantInput;
};

export type MutationProductVariantSetDefaultArgs = {
    productId: Scalars["ID"];
    variantId: Scalars["ID"];
};

export type MutationProductVariantTranslateArgs = {
    id: Scalars["ID"];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationProductVariantChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: Array<ProductVariantChannelListingAddInput>;
};

export type MutationProductVariantReorderAttributeValuesArgs = {
    attributeId: Scalars["ID"];
    moves: Array<Maybe<ReorderInput>>;
    variantId: Scalars["ID"];
};

export type MutationVariantMediaAssignArgs = {
    mediaId: Scalars["ID"];
    variantId: Scalars["ID"];
};

export type MutationVariantMediaUnassignArgs = {
    mediaId: Scalars["ID"];
    variantId: Scalars["ID"];
};

export type MutationPaymentCaptureArgs = {
    amount?: Maybe<Scalars["PositiveDecimal"]>;
    paymentId: Scalars["ID"];
};

export type MutationPaymentRefundArgs = {
    amount?: Maybe<Scalars["PositiveDecimal"]>;
    paymentId: Scalars["ID"];
};

export type MutationPaymentVoidArgs = {
    paymentId: Scalars["ID"];
};

export type MutationPaymentInitializeArgs = {
    channel?: Maybe<Scalars["String"]>;
    gateway: Scalars["String"];
    paymentData?: Maybe<Scalars["JSONString"]>;
};

export type MutationPageCreateArgs = {
    input: PageCreateInput;
};

export type MutationPageDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationPageBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationPageBulkPublishArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
    isPublished: Scalars["Boolean"];
};

export type MutationPageUpdateArgs = {
    id: Scalars["ID"];
    input: PageInput;
};

export type MutationPageTranslateArgs = {
    id: Scalars["ID"];
    input: PageTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationPageTypeCreateArgs = {
    input: PageTypeCreateInput;
};

export type MutationPageTypeUpdateArgs = {
    id?: Maybe<Scalars["ID"]>;
    input: PageTypeUpdateInput;
};

export type MutationPageTypeDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationPageTypeBulkDeleteArgs = {
    ids: Array<Scalars["ID"]>;
};

export type MutationPageAttributeAssignArgs = {
    attributeIds: Array<Scalars["ID"]>;
    pageTypeId: Scalars["ID"];
};

export type MutationPageAttributeUnassignArgs = {
    attributeIds: Array<Scalars["ID"]>;
    pageTypeId: Scalars["ID"];
};

export type MutationPageTypeReorderAttributesArgs = {
    moves: Array<ReorderInput>;
    pageTypeId: Scalars["ID"];
};

export type MutationPageReorderAttributeValuesArgs = {
    attributeId: Scalars["ID"];
    moves: Array<Maybe<ReorderInput>>;
    pageId: Scalars["ID"];
};

export type MutationDraftOrderCompleteArgs = {
    id: Scalars["ID"];
};

export type MutationDraftOrderCreateArgs = {
    input: DraftOrderCreateInput;
};

export type MutationDraftOrderDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationDraftOrderBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationDraftOrderLinesBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationDraftOrderUpdateArgs = {
    id: Scalars["ID"];
    input: DraftOrderInput;
};

export type MutationOrderAddNoteArgs = {
    order: Scalars["ID"];
    input: OrderAddNoteInput;
};

export type MutationOrderCancelArgs = {
    id: Scalars["ID"];
};

export type MutationOrderCaptureArgs = {
    amount: Scalars["PositiveDecimal"];
    id: Scalars["ID"];
};

export type MutationOrderConfirmArgs = {
    id: Scalars["ID"];
};

export type MutationOrderFulfillArgs = {
    input: OrderFulfillInput;
    order?: Maybe<Scalars["ID"]>;
};

export type MutationOrderFulfillmentCancelArgs = {
    id: Scalars["ID"];
    input: FulfillmentCancelInput;
};

export type MutationOrderFulfillmentUpdateTrackingArgs = {
    id: Scalars["ID"];
    input: FulfillmentUpdateTrackingInput;
};

export type MutationOrderFulfillmentRefundProductsArgs = {
    input: OrderRefundProductsInput;
    order: Scalars["ID"];
};

export type MutationOrderFulfillmentReturnProductsArgs = {
    input: OrderReturnProductsInput;
    order: Scalars["ID"];
};

export type MutationOrderLinesCreateArgs = {
    id: Scalars["ID"];
    input: Array<Maybe<OrderLineCreateInput>>;
};

export type MutationOrderLineDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationOrderLineUpdateArgs = {
    id: Scalars["ID"];
    input: OrderLineInput;
};

export type MutationOrderDiscountAddArgs = {
    input: OrderDiscountCommonInput;
    orderId: Scalars["ID"];
};

export type MutationOrderDiscountUpdateArgs = {
    discountId: Scalars["ID"];
    input: OrderDiscountCommonInput;
};

export type MutationOrderDiscountDeleteArgs = {
    discountId: Scalars["ID"];
};

export type MutationOrderLineDiscountUpdateArgs = {
    input: OrderDiscountCommonInput;
    orderLineId: Scalars["ID"];
};

export type MutationOrderLineDiscountRemoveArgs = {
    orderLineId: Scalars["ID"];
};

export type MutationOrderMarkAsPaidArgs = {
    id: Scalars["ID"];
    transactionReference?: Maybe<Scalars["String"]>;
};

export type MutationOrderRefundArgs = {
    amount: Scalars["PositiveDecimal"];
    id: Scalars["ID"];
};

export type MutationOrderUpdateArgs = {
    id: Scalars["ID"];
    input: OrderUpdateInput;
};

export type MutationOrderUpdateShippingArgs = {
    order: Scalars["ID"];
    input?: Maybe<OrderUpdateShippingInput>;
};

export type MutationOrderVoidArgs = {
    id: Scalars["ID"];
};

export type MutationOrderBulkCancelArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationDeleteMetadataArgs = {
    id: Scalars["ID"];
    keys: Array<Scalars["String"]>;
};

export type MutationDeletePrivateMetadataArgs = {
    id: Scalars["ID"];
    keys: Array<Scalars["String"]>;
};

export type MutationUpdateMetadataArgs = {
    id: Scalars["ID"];
    input: Array<MetadataInput>;
};

export type MutationUpdatePrivateMetadataArgs = {
    id: Scalars["ID"];
    input: Array<MetadataInput>;
};

export type MutationAssignNavigationArgs = {
    menu?: Maybe<Scalars["ID"]>;
    navigationType: NavigationType;
};

export type MutationMenuCreateArgs = {
    input: MenuCreateInput;
};

export type MutationMenuDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationMenuBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationMenuUpdateArgs = {
    id: Scalars["ID"];
    input: MenuInput;
};

export type MutationMenuItemCreateArgs = {
    input: MenuItemCreateInput;
};

export type MutationMenuItemDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationMenuItemBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationMenuItemUpdateArgs = {
    id: Scalars["ID"];
    input: MenuItemInput;
};

export type MutationMenuItemTranslateArgs = {
    id: Scalars["ID"];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationMenuItemMoveArgs = {
    menu: Scalars["ID"];
    moves: Array<Maybe<MenuItemMoveInput>>;
};

export type MutationInvoiceRequestArgs = {
    number?: Maybe<Scalars["String"]>;
    orderId: Scalars["ID"];
};

export type MutationInvoiceRequestDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationInvoiceCreateArgs = {
    input: InvoiceCreateInput;
    orderId: Scalars["ID"];
};

export type MutationInvoiceDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationInvoiceUpdateArgs = {
    id: Scalars["ID"];
    input: UpdateInvoiceInput;
};

export type MutationInvoiceSendNotificationArgs = {
    id: Scalars["ID"];
};

export type MutationGiftCardActivateArgs = {
    id: Scalars["ID"];
};

export type MutationGiftCardCreateArgs = {
    input: GiftCardCreateInput;
};

export type MutationGiftCardDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationGiftCardDeactivateArgs = {
    id: Scalars["ID"];
};

export type MutationGiftCardUpdateArgs = {
    id: Scalars["ID"];
    input: GiftCardUpdateInput;
};

export type MutationPluginUpdateArgs = {
    channelId?: Maybe<Scalars["ID"]>;
    id: Scalars["ID"];
    input: PluginUpdateInput;
};

export type MutationSaleCreateArgs = {
    input: SaleInput;
};

export type MutationSaleDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationSaleBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationSaleUpdateArgs = {
    id: Scalars["ID"];
    input: SaleInput;
};

export type MutationSaleCataloguesAddArgs = {
    id: Scalars["ID"];
    input: CatalogueInput;
};

export type MutationSaleCataloguesRemoveArgs = {
    id: Scalars["ID"];
    input: CatalogueInput;
};

export type MutationSaleTranslateArgs = {
    id: Scalars["ID"];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationSaleChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: SaleChannelListingInput;
};

export type MutationVoucherCreateArgs = {
    input: VoucherInput;
};

export type MutationVoucherDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationVoucherBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationVoucherUpdateArgs = {
    id: Scalars["ID"];
    input: VoucherInput;
};

export type MutationVoucherCataloguesAddArgs = {
    id: Scalars["ID"];
    input: CatalogueInput;
};

export type MutationVoucherCataloguesRemoveArgs = {
    id: Scalars["ID"];
    input: CatalogueInput;
};

export type MutationVoucherTranslateArgs = {
    id: Scalars["ID"];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationVoucherChannelListingUpdateArgs = {
    id: Scalars["ID"];
    input: VoucherChannelListingInput;
};

export type MutationExportProductsArgs = {
    input: ExportProductsInput;
};

export type MutationFileUploadArgs = {
    file: Scalars["Upload"];
};

export type MutationCheckoutAddPromoCodeArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    promoCode: Scalars["String"];
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutBillingAddressUpdateArgs = {
    billingAddress: AddressInput;
    checkoutId?: Maybe<Scalars["ID"]>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutCompleteArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    paymentData?: Maybe<Scalars["JSONString"]>;
    redirectUrl?: Maybe<Scalars["String"]>;
    storeSource?: Maybe<Scalars["Boolean"]>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutCreateArgs = {
    input: CheckoutCreateInput;
};

export type MutationCheckoutCustomerAttachArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutCustomerDetachArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutEmailUpdateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    email: Scalars["String"];
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutLineDeleteArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    lineId?: Maybe<Scalars["ID"]>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutLinesAddArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    lines: Array<Maybe<CheckoutLineInput>>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutLinesUpdateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    lines: Array<Maybe<CheckoutLineInput>>;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutRemovePromoCodeArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    promoCode: Scalars["String"];
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutPaymentCreateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    input: PaymentInput;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutShippingAddressUpdateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    shippingAddress: AddressInput;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutShippingMethodUpdateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    shippingMethodId: Scalars["ID"];
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationCheckoutLanguageCodeUpdateArgs = {
    checkoutId?: Maybe<Scalars["ID"]>;
    languageCode: LanguageCodeEnum;
    token?: Maybe<Scalars["UUID"]>;
};

export type MutationChannelCreateArgs = {
    input: ChannelCreateInput;
};

export type MutationChannelUpdateArgs = {
    id: Scalars["ID"];
    input: ChannelUpdateInput;
};

export type MutationChannelDeleteArgs = {
    id: Scalars["ID"];
    input?: Maybe<ChannelDeleteInput>;
};

export type MutationChannelActivateArgs = {
    id: Scalars["ID"];
};

export type MutationChannelDeactivateArgs = {
    id: Scalars["ID"];
};

export type MutationAttributeCreateArgs = {
    input: AttributeCreateInput;
};

export type MutationAttributeDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAttributeUpdateArgs = {
    id: Scalars["ID"];
    input: AttributeUpdateInput;
};

export type MutationAttributeTranslateArgs = {
    id: Scalars["ID"];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationAttributeBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationAttributeValueBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationAttributeValueCreateArgs = {
    attribute: Scalars["ID"];
    input: AttributeValueCreateInput;
};

export type MutationAttributeValueDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAttributeValueUpdateArgs = {
    id: Scalars["ID"];
    input: AttributeValueCreateInput;
};

export type MutationAttributeValueTranslateArgs = {
    id: Scalars["ID"];
    input: AttributeValueTranslationInput;
    languageCode: LanguageCodeEnum;
};

export type MutationAttributeReorderValuesArgs = {
    attributeId: Scalars["ID"];
    moves: Array<Maybe<ReorderInput>>;
};

export type MutationAppCreateArgs = {
    input: AppInput;
};

export type MutationAppUpdateArgs = {
    id: Scalars["ID"];
    input: AppInput;
};

export type MutationAppDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAppTokenCreateArgs = {
    input: AppTokenInput;
};

export type MutationAppTokenDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAppTokenVerifyArgs = {
    token: Scalars["String"];
};

export type MutationAppInstallArgs = {
    input: AppInstallInput;
};

export type MutationAppRetryInstallArgs = {
    activateAfterInstallation?: Maybe<Scalars["Boolean"]>;
    id: Scalars["ID"];
};

export type MutationAppDeleteFailedInstallationArgs = {
    id: Scalars["ID"];
};

export type MutationAppFetchManifestArgs = {
    manifestUrl: Scalars["String"];
};

export type MutationAppActivateArgs = {
    id: Scalars["ID"];
};

export type MutationAppDeactivateArgs = {
    id: Scalars["ID"];
};

export type MutationTokenCreateArgs = {
    email: Scalars["String"];
    password: Scalars["String"];
};

export type MutationTokenRefreshArgs = {
    csrfToken?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
};

export type MutationTokenVerifyArgs = {
    token: Scalars["String"];
};

export type MutationExternalAuthenticationUrlArgs = {
    input: Scalars["JSONString"];
    pluginId: Scalars["String"];
};

export type MutationExternalObtainAccessTokensArgs = {
    input: Scalars["JSONString"];
    pluginId: Scalars["String"];
};

export type MutationExternalRefreshArgs = {
    input: Scalars["JSONString"];
    pluginId: Scalars["String"];
};

export type MutationExternalLogoutArgs = {
    input: Scalars["JSONString"];
    pluginId: Scalars["String"];
};

export type MutationExternalVerifyArgs = {
    input: Scalars["JSONString"];
    pluginId: Scalars["String"];
};

export type MutationRequestPasswordResetArgs = {
    channel?: Maybe<Scalars["String"]>;
    email: Scalars["String"];
    redirectUrl: Scalars["String"];
};

export type MutationConfirmAccountArgs = {
    email: Scalars["String"];
    token: Scalars["String"];
};

export type MutationSetPasswordArgs = {
    email: Scalars["String"];
    password: Scalars["String"];
    token: Scalars["String"];
};

export type MutationPasswordChangeArgs = {
    newPassword: Scalars["String"];
    oldPassword: Scalars["String"];
};

export type MutationRequestEmailChangeArgs = {
    channel?: Maybe<Scalars["String"]>;
    newEmail: Scalars["String"];
    password: Scalars["String"];
    redirectUrl: Scalars["String"];
};

export type MutationConfirmEmailChangeArgs = {
    channel?: Maybe<Scalars["String"]>;
    token: Scalars["String"];
};

export type MutationAccountAddressCreateArgs = {
    input: AddressInput;
    type?: Maybe<AddressTypeEnum>;
};

export type MutationAccountAddressUpdateArgs = {
    id: Scalars["ID"];
    input: AddressInput;
};

export type MutationAccountAddressDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAccountSetDefaultAddressArgs = {
    id: Scalars["ID"];
    type: AddressTypeEnum;
};

export type MutationAccountRegisterArgs = {
    input: AccountRegisterInput;
};

export type MutationAccountUpdateArgs = {
    input: AccountInput;
};

export type MutationAccountRequestDeletionArgs = {
    channel?: Maybe<Scalars["String"]>;
    redirectUrl: Scalars["String"];
};

export type MutationAccountDeleteArgs = {
    token: Scalars["String"];
};

export type MutationAddressCreateArgs = {
    input: AddressInput;
    userId: Scalars["ID"];
};

export type MutationAddressUpdateArgs = {
    id: Scalars["ID"];
    input: AddressInput;
};

export type MutationAddressDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationAddressSetDefaultArgs = {
    addressId: Scalars["ID"];
    type: AddressTypeEnum;
    userId: Scalars["ID"];
};

export type MutationCustomerCreateArgs = {
    input: UserCreateInput;
};

export type MutationCustomerUpdateArgs = {
    id: Scalars["ID"];
    input: CustomerInput;
};

export type MutationCustomerDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationCustomerBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationStaffCreateArgs = {
    input: StaffCreateInput;
};

export type MutationStaffUpdateArgs = {
    id: Scalars["ID"];
    input: StaffUpdateInput;
};

export type MutationStaffDeleteArgs = {
    id: Scalars["ID"];
};

export type MutationStaffBulkDeleteArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationUserAvatarUpdateArgs = {
    image: Scalars["Upload"];
};

export type MutationUserBulkSetActiveArgs = {
    ids: Array<Maybe<Scalars["ID"]>>;
    isActive: Scalars["Boolean"];
};

export type MutationPermissionGroupCreateArgs = {
    input: PermissionGroupCreateInput;
};

export type MutationPermissionGroupUpdateArgs = {
    id: Scalars["ID"];
    input: PermissionGroupUpdateInput;
};

export type MutationPermissionGroupDeleteArgs = {
    id: Scalars["ID"];
};

export type NameTranslationInput = {
    name?: Maybe<Scalars["String"]>;
};

export type NavigationType = "MAIN" | "SECONDARY";

export type Node = {
    id: Scalars["ID"];
};

export type ObjectWithMetadata = {
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
};

export type Order = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        created: Scalars["DateTime"];
        status: OrderStatus;
        user?: Maybe<User>;
        trackingClientId: Scalars["String"];
        billingAddress?: Maybe<Address>;
        shippingAddress?: Maybe<Address>;
        shippingMethod?: Maybe<ShippingMethod>;
        shippingMethodName?: Maybe<Scalars["String"]>;
        channel: Channel;
        shippingPrice: TaxedMoney;
        shippingTaxRate: Scalars["Float"];
        token: Scalars["String"];
        voucher?: Maybe<Voucher>;
        giftCards?: Maybe<Array<Maybe<GiftCard>>>;
        displayGrossPrices: Scalars["Boolean"];
        customerNote: Scalars["String"];
        weight?: Maybe<Weight>;
        redirectUrl?: Maybe<Scalars["String"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        fulfillments: Array<Maybe<Fulfillment>>;
        lines: Array<Maybe<OrderLine>>;
        actions: Array<Maybe<OrderAction>>;
        availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
        invoices?: Maybe<Array<Maybe<Invoice>>>;
        number?: Maybe<Scalars["String"]>;
        original?: Maybe<Scalars["ID"]>;
        origin: OrderOriginEnum;
        isPaid: Scalars["Boolean"];
        paymentStatus: PaymentChargeStatusEnum;
        paymentStatusDisplay: Scalars["String"];
        payments?: Maybe<Array<Maybe<Payment>>>;
        total: TaxedMoney;
        undiscountedTotal: TaxedMoney;
        subtotal: TaxedMoney;
        statusDisplay?: Maybe<Scalars["String"]>;
        canFinalize: Scalars["Boolean"];
        totalAuthorized: Money;
        totalCaptured: Money;
        events?: Maybe<Array<Maybe<OrderEvent>>>;
        totalBalance: Money;
        userEmail?: Maybe<Scalars["String"]>;
        isShippingRequired: Scalars["Boolean"];
        /** @deprecated Use the `languageCodeEnum` field to fetch the language code. This field will be removed in Saleor 4.0. */
        languageCode: Scalars["String"];
        languageCodeEnum: LanguageCodeEnum;
        /** @deprecated Use discounts field. This field will be removed in Saleor 4.0. */
        discount?: Maybe<Money>;
        /** @deprecated Use discounts field. This field will be removed in Saleor 4.0. */
        discountName?: Maybe<Scalars["String"]>;
        /** @deprecated Use discounts field. This field will be removed in Saleor 4.0. */
        translatedDiscountName?: Maybe<Scalars["String"]>;
        discounts?: Maybe<Array<OrderDiscount>>;
        errors: Array<OrderError>;
    };

export type OrderAction = "CAPTURE" | "MARK_AS_PAID" | "REFUND" | "VOID";

export type OrderAddNote = {
    order?: Maybe<Order>;
    event?: Maybe<OrderEvent>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderAddNoteInput = {
    message: Scalars["String"];
};

export type OrderBulkCancel = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCancel = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCapture = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderConfirm = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<OrderCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type OrderCountableEdge = {
    node: Order;
    cursor: Scalars["String"];
};

export type OrderDirection = "ASC" | "DESC";

export type OrderDiscount = Node & {
    id: Scalars["ID"];
    type: OrderDiscountType;
    valueType: DiscountValueTypeEnum;
    value: Scalars["PositiveDecimal"];
    name?: Maybe<Scalars["String"]>;
    translatedName?: Maybe<Scalars["String"]>;
    reason?: Maybe<Scalars["String"]>;
    amount: Money;
};

export type OrderDiscountAdd = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
    valueType: DiscountValueTypeEnum;
    value: Scalars["PositiveDecimal"];
    reason?: Maybe<Scalars["String"]>;
};

export type OrderDiscountDelete = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderDiscountType = "VOUCHER" | "MANUAL";

export type OrderDiscountUpdate = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
    customer?: Maybe<Scalars["String"]>;
    created?: Maybe<DateRangeInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    channels?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type OrderError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: OrderErrorCode;
    warehouse?: Maybe<Scalars["ID"]>;
    orderLines?: Maybe<Array<Scalars["ID"]>>;
    variants?: Maybe<Array<Scalars["ID"]>>;
    addressType?: Maybe<AddressTypeEnum>;
};

export type OrderErrorCode =
    | "BILLING_ADDRESS_NOT_SET"
    | "CANNOT_CANCEL_FULFILLMENT"
    | "CANNOT_CANCEL_ORDER"
    | "CANNOT_DELETE"
    | "CANNOT_DISCOUNT"
    | "CANNOT_REFUND"
    | "CAPTURE_INACTIVE_PAYMENT"
    | "NOT_EDITABLE"
    | "FULFILL_ORDER_LINE"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "PRODUCT_NOT_PUBLISHED"
    | "PRODUCT_UNAVAILABLE_FOR_PURCHASE"
    | "NOT_FOUND"
    | "ORDER_NO_SHIPPING_ADDRESS"
    | "PAYMENT_ERROR"
    | "PAYMENT_MISSING"
    | "REQUIRED"
    | "SHIPPING_METHOD_NOT_APPLICABLE"
    | "SHIPPING_METHOD_REQUIRED"
    | "TAX_ERROR"
    | "UNIQUE"
    | "VOID_INACTIVE_PAYMENT"
    | "ZERO_QUANTITY"
    | "INVALID_QUANTITY"
    | "INSUFFICIENT_STOCK"
    | "DUPLICATED_INPUT_ITEM"
    | "NOT_AVAILABLE_IN_CHANNEL"
    | "CHANNEL_INACTIVE";

export type OrderEvent = Node & {
    id: Scalars["ID"];
    date?: Maybe<Scalars["DateTime"]>;
    type?: Maybe<OrderEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    emailType?: Maybe<OrderEventsEmailsEnum>;
    amount?: Maybe<Scalars["Float"]>;
    paymentId?: Maybe<Scalars["String"]>;
    paymentGateway?: Maybe<Scalars["String"]>;
    quantity?: Maybe<Scalars["Int"]>;
    composedId?: Maybe<Scalars["String"]>;
    orderNumber?: Maybe<Scalars["String"]>;
    invoiceNumber?: Maybe<Scalars["String"]>;
    oversoldItems?: Maybe<Array<Maybe<Scalars["String"]>>>;
    lines?: Maybe<Array<Maybe<OrderEventOrderLineObject>>>;
    fulfilledItems?: Maybe<Array<Maybe<FulfillmentLine>>>;
    warehouse?: Maybe<Warehouse>;
    transactionReference?: Maybe<Scalars["String"]>;
    shippingCostsIncluded?: Maybe<Scalars["Boolean"]>;
    relatedOrder?: Maybe<Order>;
    discount?: Maybe<OrderEventDiscountObject>;
};

export type OrderEventCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<OrderEventCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type OrderEventCountableEdge = {
    node: OrderEvent;
    cursor: Scalars["String"];
};

export type OrderEventDiscountObject = {
    valueType: DiscountValueTypeEnum;
    value: Scalars["PositiveDecimal"];
    reason?: Maybe<Scalars["String"]>;
    amount?: Maybe<Money>;
    oldValueType?: Maybe<DiscountValueTypeEnum>;
    oldValue?: Maybe<Scalars["PositiveDecimal"]>;
    oldAmount?: Maybe<Money>;
};

export type OrderEventOrderLineObject = {
    quantity?: Maybe<Scalars["Int"]>;
    orderLine?: Maybe<OrderLine>;
    itemName?: Maybe<Scalars["String"]>;
    discount?: Maybe<OrderEventDiscountObject>;
};

export type OrderEventsEmailsEnum =
    | "PAYMENT_CONFIRMATION"
    | "CONFIRMED"
    | "SHIPPING_CONFIRMATION"
    | "TRACKING_UPDATED"
    | "ORDER_CONFIRMATION"
    | "ORDER_CANCEL"
    | "ORDER_REFUND"
    | "FULFILLMENT_CONFIRMATION"
    | "DIGITAL_LINKS";

export type OrderEventsEnum =
    | "DRAFT_CREATED"
    | "DRAFT_CREATED_FROM_REPLACE"
    | "ADDED_PRODUCTS"
    | "REMOVED_PRODUCTS"
    | "PLACED"
    | "PLACED_FROM_DRAFT"
    | "OVERSOLD_ITEMS"
    | "CANCELED"
    | "ORDER_MARKED_AS_PAID"
    | "ORDER_FULLY_PAID"
    | "ORDER_REPLACEMENT_CREATED"
    | "ORDER_DISCOUNT_ADDED"
    | "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED"
    | "ORDER_DISCOUNT_UPDATED"
    | "ORDER_DISCOUNT_DELETED"
    | "ORDER_LINE_DISCOUNT_UPDATED"
    | "ORDER_LINE_DISCOUNT_REMOVED"
    | "ORDER_LINE_PRODUCT_DELETED"
    | "ORDER_LINE_VARIANT_DELETED"
    | "UPDATED_ADDRESS"
    | "EMAIL_SENT"
    | "CONFIRMED"
    | "PAYMENT_AUTHORIZED"
    | "PAYMENT_CAPTURED"
    | "EXTERNAL_SERVICE_NOTIFICATION"
    | "PAYMENT_REFUNDED"
    | "PAYMENT_VOIDED"
    | "PAYMENT_FAILED"
    | "INVOICE_REQUESTED"
    | "INVOICE_GENERATED"
    | "INVOICE_UPDATED"
    | "INVOICE_SENT"
    | "FULFILLMENT_CANCELED"
    | "FULFILLMENT_RESTOCKED_ITEMS"
    | "FULFILLMENT_FULFILLED_ITEMS"
    | "FULFILLMENT_REFUNDED"
    | "FULFILLMENT_RETURNED"
    | "FULFILLMENT_REPLACED"
    | "TRACKING_UPDATED"
    | "NOTE_ADDED"
    | "OTHER";

export type OrderFilterInput = {
    paymentStatus?: Maybe<Array<Maybe<PaymentChargeStatusEnum>>>;
    status?: Maybe<Array<Maybe<OrderStatusFilter>>>;
    customer?: Maybe<Scalars["String"]>;
    created?: Maybe<DateRangeInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    channels?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type OrderFulfill = {
    fulfillments?: Maybe<Array<Maybe<Fulfillment>>>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderFulfillInput = {
    lines: Array<OrderFulfillLineInput>;
    notifyCustomer?: Maybe<Scalars["Boolean"]>;
};

export type OrderFulfillLineInput = {
    orderLineId?: Maybe<Scalars["ID"]>;
    stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
    quantity: Scalars["Int"];
    warehouse: Scalars["ID"];
};

export type OrderLine = Node & {
    id: Scalars["ID"];
    productName: Scalars["String"];
    variantName: Scalars["String"];
    productSku: Scalars["String"];
    isShippingRequired: Scalars["Boolean"];
    quantity: Scalars["Int"];
    quantityFulfilled: Scalars["Int"];
    unitDiscountReason?: Maybe<Scalars["String"]>;
    taxRate: Scalars["Float"];
    digitalContentUrl?: Maybe<DigitalContentUrl>;
    thumbnail?: Maybe<Image>;
    unitPrice: TaxedMoney;
    undiscountedUnitPrice: TaxedMoney;
    unitDiscount: Money;
    unitDiscountValue: Scalars["PositiveDecimal"];
    totalPrice: TaxedMoney;
    variant?: Maybe<ProductVariant>;
    translatedProductName: Scalars["String"];
    translatedVariantName: Scalars["String"];
    allocations?: Maybe<Array<Allocation>>;
    unitDiscountType?: Maybe<DiscountValueTypeEnum>;
};

export type OrderLineThumbnailArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type OrderLineCreateInput = {
    quantity: Scalars["Int"];
    variantId: Scalars["ID"];
};

export type OrderLineDelete = {
    order?: Maybe<Order>;
    orderLine?: Maybe<OrderLine>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineDiscountRemove = {
    orderLine?: Maybe<OrderLine>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineDiscountUpdate = {
    orderLine?: Maybe<OrderLine>;
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineInput = {
    quantity: Scalars["Int"];
};

export type OrderLineUpdate = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    orderLine?: Maybe<OrderLine>;
};

export type OrderLinesCreate = {
    order?: Maybe<Order>;
    orderLines?: Maybe<Array<OrderLine>>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderMarkAsPaid = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderOriginEnum = "CHECKOUT" | "DRAFT" | "REISSUE";

export type OrderRefund = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
    fulfillmentLineId: Scalars["ID"];
    quantity: Scalars["Int"];
};

export type OrderRefundLineInput = {
    orderLineId: Scalars["ID"];
    quantity: Scalars["Int"];
};

export type OrderRefundProductsInput = {
    orderLines?: Maybe<Array<OrderRefundLineInput>>;
    fulfillmentLines?: Maybe<Array<OrderRefundFulfillmentLineInput>>;
    amountToRefund?: Maybe<Scalars["PositiveDecimal"]>;
    includeShippingCosts?: Maybe<Scalars["Boolean"]>;
};

export type OrderReturnFulfillmentLineInput = {
    fulfillmentLineId: Scalars["ID"];
    quantity: Scalars["Int"];
    replace?: Maybe<Scalars["Boolean"]>;
};

export type OrderReturnLineInput = {
    orderLineId: Scalars["ID"];
    quantity: Scalars["Int"];
    replace?: Maybe<Scalars["Boolean"]>;
};

export type OrderReturnProductsInput = {
    orderLines?: Maybe<Array<OrderReturnLineInput>>;
    fulfillmentLines?: Maybe<Array<OrderReturnFulfillmentLineInput>>;
    amountToRefund?: Maybe<Scalars["PositiveDecimal"]>;
    includeShippingCosts?: Maybe<Scalars["Boolean"]>;
    refund?: Maybe<Scalars["Boolean"]>;
};

export type OrderSettings = {
    automaticallyConfirmAllNewOrders: Scalars["Boolean"];
};

export type OrderSettingsError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: OrderSettingsErrorCode;
};

export type OrderSettingsErrorCode = "INVALID";

export type OrderSettingsUpdate = {
    orderSettings?: Maybe<OrderSettings>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderSettingsErrors: Array<OrderSettingsError>;
    errors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
    automaticallyConfirmAllNewOrders: Scalars["Boolean"];
};

export type OrderSortField = "NUMBER" | "CREATION_DATE" | "CUSTOMER" | "PAYMENT" | "FULFILLMENT_STATUS";

export type OrderSortingInput = {
    direction: OrderDirection;
    field: OrderSortField;
};

export type OrderStatus =
    | "DRAFT"
    | "UNCONFIRMED"
    | "UNFULFILLED"
    | "PARTIALLY_FULFILLED"
    | "PARTIALLY_RETURNED"
    | "RETURNED"
    | "FULFILLED"
    | "CANCELED";

export type OrderStatusFilter =
    | "READY_TO_FULFILL"
    | "READY_TO_CAPTURE"
    | "UNFULFILLED"
    | "UNCONFIRMED"
    | "PARTIALLY_FULFILLED"
    | "FULFILLED"
    | "CANCELED";

export type OrderUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type OrderUpdateInput = {
    billingAddress?: Maybe<AddressInput>;
    userEmail?: Maybe<Scalars["String"]>;
    shippingAddress?: Maybe<AddressInput>;
};

export type OrderUpdateShipping = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
    shippingMethod?: Maybe<Scalars["ID"]>;
};

export type OrderVoid = {
    order?: Maybe<Order>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type Page = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        seoTitle?: Maybe<Scalars["String"]>;
        seoDescription?: Maybe<Scalars["String"]>;
        title: Scalars["String"];
        content?: Maybe<Scalars["JSONString"]>;
        publicationDate?: Maybe<Scalars["Date"]>;
        isPublished: Scalars["Boolean"];
        slug: Scalars["String"];
        pageType: PageType;
        created: Scalars["DateTime"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `content` field instead. */
        contentJson: Scalars["JSONString"];
        translation?: Maybe<PageTranslation>;
        attributes: Array<SelectedAttribute>;
    };

export type PageTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type PageAttributeAssign = {
    pageType?: Maybe<PageType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageAttributeUnassign = {
    pageType?: Maybe<PageType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageBulkPublish = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<PageCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type PageCountableEdge = {
    node: Page;
    cursor: Scalars["String"];
};

export type PageCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PageCreateInput = {
    slug?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["JSONString"]>;
    attributes?: Maybe<Array<AttributeValueInput>>;
    isPublished?: Maybe<Scalars["Boolean"]>;
    publicationDate?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    pageType: Scalars["ID"];
};

export type PageDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PageError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: PageErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
};

export type PageErrorCode =
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "DUPLICATED_INPUT_ITEM"
    | "ATTRIBUTE_ALREADY_ASSIGNED";

export type PageFilterInput = {
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    pageTypes?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type PageInfo = {
    hasNextPage: Scalars["Boolean"];
    hasPreviousPage: Scalars["Boolean"];
    startCursor?: Maybe<Scalars["String"]>;
    endCursor?: Maybe<Scalars["String"]>;
};

export type PageInput = {
    slug?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["JSONString"]>;
    attributes?: Maybe<Array<AttributeValueInput>>;
    isPublished?: Maybe<Scalars["Boolean"]>;
    publicationDate?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
};

export type PageReorderAttributeValues = {
    page?: Maybe<Page>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageSortField = "TITLE" | "SLUG" | "VISIBILITY" | "CREATION_DATE" | "PUBLICATION_DATE";

export type PageSortingInput = {
    direction: OrderDirection;
    field: PageSortField;
};

export type PageTranslatableContent = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    title: Scalars["String"];
    content?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Will be removed in Saleor 4.0. Use the `content` field instead. */
    contentJson?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<PageTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    page?: Maybe<Page>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};

export type PageTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type PageTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    page?: Maybe<PageTranslatableContent>;
};

export type PageTranslation = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
    /** @deprecated Will be removed in Saleor 4.0. Use the `content` field instead. */
    contentJson?: Maybe<Scalars["JSONString"]>;
};

export type PageTranslationInput = {
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["JSONString"]>;
};

export type PageType = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        slug: Scalars["String"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        attributes?: Maybe<Array<Maybe<Attribute>>>;
        availableAttributes?: Maybe<AttributeCountableConnection>;
        hasPages?: Maybe<Scalars["Boolean"]>;
    };

export type PageTypeAvailableAttributesArgs = {
    filter?: Maybe<AttributeFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type PageTypeBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageTypeCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<PageTypeCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type PageTypeCountableEdge = {
    node: PageType;
    cursor: Scalars["String"];
};

export type PageTypeCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    addAttributes?: Maybe<Array<Scalars["ID"]>>;
};

export type PageTypeDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeFilterInput = {
    search?: Maybe<Scalars["String"]>;
};

export type PageTypeReorderAttributes = {
    pageType?: Maybe<PageType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageTypeSortField = "NAME" | "SLUG";

export type PageTypeSortingInput = {
    direction: OrderDirection;
    field: PageTypeSortField;
};

export type PageTypeUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    addAttributes?: Maybe<Array<Scalars["ID"]>>;
    removeAttributes?: Maybe<Array<Scalars["ID"]>>;
};

export type PageUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PasswordChange = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type Payment = Node & {
    id: Scalars["ID"];
    gateway: Scalars["String"];
    isActive: Scalars["Boolean"];
    created: Scalars["DateTime"];
    modified: Scalars["DateTime"];
    token: Scalars["String"];
    checkout?: Maybe<Checkout>;
    order?: Maybe<Order>;
    paymentMethodType: Scalars["String"];
    customerIpAddress?: Maybe<Scalars["String"]>;
    chargeStatus: PaymentChargeStatusEnum;
    actions: Array<Maybe<OrderAction>>;
    total?: Maybe<Money>;
    capturedAmount?: Maybe<Money>;
    transactions?: Maybe<Array<Maybe<Transaction>>>;
    availableCaptureAmount?: Maybe<Money>;
    availableRefundAmount?: Maybe<Money>;
    creditCard?: Maybe<CreditCard>;
};

export type PaymentCapture = {
    payment?: Maybe<Payment>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentChargeStatusEnum =
    | "NOT_CHARGED"
    | "PENDING"
    | "PARTIALLY_CHARGED"
    | "FULLY_CHARGED"
    | "PARTIALLY_REFUNDED"
    | "FULLY_REFUNDED"
    | "REFUSED"
    | "CANCELLED";

export type PaymentCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<PaymentCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type PaymentCountableEdge = {
    node: Payment;
    cursor: Scalars["String"];
};

export type PaymentError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: PaymentErrorCode;
};

export type PaymentErrorCode =
    | "BILLING_ADDRESS_NOT_SET"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "PARTIAL_PAYMENT_NOT_ALLOWED"
    | "SHIPPING_ADDRESS_NOT_SET"
    | "INVALID_SHIPPING_METHOD"
    | "SHIPPING_METHOD_NOT_SET"
    | "PAYMENT_ERROR"
    | "NOT_SUPPORTED_GATEWAY"
    | "CHANNEL_INACTIVE";

export type PaymentFilterInput = {
    checkouts?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type PaymentGateway = {
    name: Scalars["String"];
    id: Scalars["ID"];
    config: Array<GatewayConfigLine>;
    currencies: Array<Maybe<Scalars["String"]>>;
};

export type PaymentInitialize = {
    initializedPayment?: Maybe<PaymentInitialized>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentInitialized = {
    gateway: Scalars["String"];
    name: Scalars["String"];
    data?: Maybe<Scalars["JSONString"]>;
};

export type PaymentInput = {
    gateway: Scalars["String"];
    token?: Maybe<Scalars["String"]>;
    amount?: Maybe<Scalars["PositiveDecimal"]>;
    returnUrl?: Maybe<Scalars["String"]>;
};

export type PaymentRefund = {
    payment?: Maybe<Payment>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentSource = {
    gateway: Scalars["String"];
    paymentMethodId?: Maybe<Scalars["String"]>;
    creditCardInfo?: Maybe<CreditCard>;
};

export type PaymentVoid = {
    payment?: Maybe<Payment>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type Permission = {
    code: PermissionEnum;
    name: Scalars["String"];
};

export type PermissionEnum =
    | "MANAGE_USERS"
    | "MANAGE_STAFF"
    | "MANAGE_APPS"
    | "MANAGE_CHANNELS"
    | "MANAGE_DISCOUNTS"
    | "MANAGE_PLUGINS"
    | "MANAGE_GIFT_CARD"
    | "MANAGE_MENUS"
    | "MANAGE_ORDERS"
    | "MANAGE_PAGES"
    | "MANAGE_PAGE_TYPES_AND_ATTRIBUTES"
    | "HANDLE_PAYMENTS"
    | "MANAGE_PRODUCTS"
    | "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES"
    | "MANAGE_SHIPPING"
    | "MANAGE_SETTINGS"
    | "MANAGE_TRANSLATIONS"
    | "MANAGE_CHECKOUTS";

export type PermissionGroupCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupCreateInput = {
    addPermissions?: Maybe<Array<PermissionEnum>>;
    addUsers?: Maybe<Array<Scalars["ID"]>>;
    name: Scalars["String"];
};

export type PermissionGroupDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: PermissionGroupErrorCode;
    permissions?: Maybe<Array<PermissionEnum>>;
    users?: Maybe<Array<Scalars["ID"]>>;
};

export type PermissionGroupErrorCode =
    | "ASSIGN_NON_STAFF_MEMBER"
    | "DUPLICATED_INPUT_ITEM"
    | "CANNOT_REMOVE_FROM_LAST_GROUP"
    | "LEFT_NOT_MANAGEABLE_PERMISSION"
    | "OUT_OF_SCOPE_PERMISSION"
    | "OUT_OF_SCOPE_USER"
    | "REQUIRED"
    | "UNIQUE";

export type PermissionGroupFilterInput = {
    search?: Maybe<Scalars["String"]>;
};

export type PermissionGroupSortField = "NAME";

export type PermissionGroupSortingInput = {
    direction: OrderDirection;
    field: PermissionGroupSortField;
};

export type PermissionGroupUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupUpdateInput = {
    addPermissions?: Maybe<Array<PermissionEnum>>;
    addUsers?: Maybe<Array<Scalars["ID"]>>;
    name?: Maybe<Scalars["String"]>;
    removePermissions?: Maybe<Array<PermissionEnum>>;
    removeUsers?: Maybe<Array<Scalars["ID"]>>;
};

export type Plugin = {
    id: Scalars["ID"];
    name: Scalars["String"];
    description: Scalars["String"];
    globalConfiguration?: Maybe<PluginConfiguration>;
    channelConfigurations: Array<PluginConfiguration>;
};

export type PluginConfiguration = {
    active: Scalars["Boolean"];
    channel?: Maybe<Channel>;
    configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
};

export type PluginConfigurationType = "PER_CHANNEL" | "GLOBAL";

export type PluginCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<PluginCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type PluginCountableEdge = {
    node: Plugin;
    cursor: Scalars["String"];
};

export type PluginError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: PluginErrorCode;
};

export type PluginErrorCode =
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "PLUGIN_MISCONFIGURED"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type PluginFilterInput = {
    statusInChannels?: Maybe<PluginStatusInChannelsInput>;
    search?: Maybe<Scalars["String"]>;
    type?: Maybe<PluginConfigurationType>;
};

export type PluginSortField = "NAME" | "IS_ACTIVE";

export type PluginSortingInput = {
    direction: OrderDirection;
    field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
    active: Scalars["Boolean"];
    channels: Array<Scalars["ID"]>;
};

export type PluginUpdate = {
    plugin?: Maybe<Plugin>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    pluginsErrors: Array<PluginError>;
    errors: Array<PluginError>;
};

export type PluginUpdateInput = {
    active?: Maybe<Scalars["Boolean"]>;
    configuration?: Maybe<Array<Maybe<ConfigurationItemInput>>>;
};

export type PostalCodeRuleInclusionTypeEnum = "INCLUDE" | "EXCLUDE";

export type PriceInput = {
    currency: Scalars["String"];
    amount: Scalars["PositiveDecimal"];
};

export type PriceRangeInput = {
    gte?: Maybe<Scalars["Float"]>;
    lte?: Maybe<Scalars["Float"]>;
};

export type Product = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        seoTitle?: Maybe<Scalars["String"]>;
        seoDescription?: Maybe<Scalars["String"]>;
        name: Scalars["String"];
        description?: Maybe<Scalars["JSONString"]>;
        productType: ProductType;
        slug: Scalars["String"];
        category?: Maybe<Category>;
        updatedAt?: Maybe<Scalars["DateTime"]>;
        chargeTaxes: Scalars["Boolean"];
        weight?: Maybe<Weight>;
        defaultVariant?: Maybe<ProductVariant>;
        rating?: Maybe<Scalars["Float"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
        descriptionJson?: Maybe<Scalars["JSONString"]>;
        thumbnail?: Maybe<Image>;
        pricing?: Maybe<ProductPricingInfo>;
        isAvailable?: Maybe<Scalars["Boolean"]>;
        taxType?: Maybe<TaxType>;
        attributes: Array<SelectedAttribute>;
        channelListings?: Maybe<Array<ProductChannelListing>>;
        mediaById?: Maybe<ProductMedia>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `mediaById` field instead. */
        imageById?: Maybe<ProductImage>;
        variants?: Maybe<Array<Maybe<ProductVariant>>>;
        media?: Maybe<Array<ProductMedia>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `media` field instead. */
        images?: Maybe<Array<Maybe<ProductImage>>>;
        collections?: Maybe<Array<Maybe<Collection>>>;
        translation?: Maybe<ProductTranslation>;
        availableForPurchase?: Maybe<Scalars["Date"]>;
        isAvailableForPurchase?: Maybe<Scalars["Boolean"]>;
    };

export type ProductThumbnailArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type ProductPricingArgs = {
    address?: Maybe<AddressInput>;
};

export type ProductIsAvailableArgs = {
    address?: Maybe<AddressInput>;
};

export type ProductMediaByIdArgs = {
    id?: Maybe<Scalars["ID"]>;
};

export type ProductImageByIdArgs = {
    id?: Maybe<Scalars["ID"]>;
};

export type ProductTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductAttributeAssign = {
    productType?: Maybe<ProductType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductAttributeAssignInput = {
    id: Scalars["ID"];
    type: ProductAttributeType;
};

export type ProductAttributeType = "PRODUCT" | "VARIANT";

export type ProductAttributeUnassign = {
    productType?: Maybe<ProductType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductChannelListing = Node & {
    id: Scalars["ID"];
    publicationDate?: Maybe<Scalars["Date"]>;
    isPublished: Scalars["Boolean"];
    channel: Channel;
    visibleInListings: Scalars["Boolean"];
    availableForPurchase?: Maybe<Scalars["Date"]>;
    discountedPrice?: Maybe<Money>;
    purchaseCost?: Maybe<MoneyRange>;
    margin?: Maybe<Margin>;
    isAvailableForPurchase?: Maybe<Scalars["Boolean"]>;
    pricing?: Maybe<ProductPricingInfo>;
};

export type ProductChannelListingPricingArgs = {
    address?: Maybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
    channelId: Scalars["ID"];
    isPublished?: Maybe<Scalars["Boolean"]>;
    publicationDate?: Maybe<Scalars["Date"]>;
    visibleInListings?: Maybe<Scalars["Boolean"]>;
    isAvailableForPurchase?: Maybe<Scalars["Boolean"]>;
    availableForPurchaseDate?: Maybe<Scalars["Date"]>;
    addVariants?: Maybe<Array<Scalars["ID"]>>;
    removeVariants?: Maybe<Array<Scalars["ID"]>>;
};

export type ProductChannelListingError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
    channels?: Maybe<Array<Scalars["ID"]>>;
    variants?: Maybe<Array<Scalars["ID"]>>;
};

export type ProductChannelListingUpdate = {
    product?: Maybe<Product>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productChannelListingErrors: Array<ProductChannelListingError>;
    errors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
    updateChannels?: Maybe<Array<ProductChannelListingAddInput>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type ProductCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<ProductCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ProductCountableEdge = {
    node: Product;
    cursor: Scalars["String"];
};

export type ProductCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductCreateInput = {
    attributes?: Maybe<Array<AttributeValueInput>>;
    category?: Maybe<Scalars["ID"]>;
    chargeTaxes?: Maybe<Scalars["Boolean"]>;
    collections?: Maybe<Array<Scalars["ID"]>>;
    description?: Maybe<Scalars["JSONString"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    taxCode?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    weight?: Maybe<Scalars["WeightScalar"]>;
    rating?: Maybe<Scalars["Float"]>;
    productType: Scalars["ID"];
};

export type ProductDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars["ID"]>>;
    values?: Maybe<Array<Scalars["ID"]>>;
};

export type ProductErrorCode =
    | "ALREADY_EXISTS"
    | "ATTRIBUTE_ALREADY_ASSIGNED"
    | "ATTRIBUTE_CANNOT_BE_ASSIGNED"
    | "ATTRIBUTE_VARIANTS_DISABLED"
    | "DUPLICATED_INPUT_ITEM"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "PRODUCT_WITHOUT_CATEGORY"
    | "NOT_PRODUCTS_IMAGE"
    | "NOT_PRODUCTS_VARIANT"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "VARIANT_NO_DIGITAL_CONTENT"
    | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
    | "PRODUCT_NOT_ASSIGNED_TO_CHANNEL"
    | "UNSUPPORTED_MEDIA_PROVIDER";

export type ProductFieldEnum =
    | "NAME"
    | "DESCRIPTION"
    | "PRODUCT_TYPE"
    | "CATEGORY"
    | "PRODUCT_WEIGHT"
    | "COLLECTIONS"
    | "CHARGE_TAXES"
    | "PRODUCT_MEDIA"
    | "VARIANT_SKU"
    | "VARIANT_WEIGHT"
    | "VARIANT_MEDIA";

export type ProductFilterInput = {
    isPublished?: Maybe<Scalars["Boolean"]>;
    collections?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    categories?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    hasCategory?: Maybe<Scalars["Boolean"]>;
    attributes?: Maybe<Array<Maybe<AttributeInput>>>;
    stockAvailability?: Maybe<StockAvailability>;
    stocks?: Maybe<ProductStockFilterInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    price?: Maybe<PriceRangeInput>;
    minimalPrice?: Maybe<PriceRangeInput>;
    productTypes?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    channel?: Maybe<Scalars["String"]>;
};

export type ProductImage = {
    id: Scalars["ID"];
    alt?: Maybe<Scalars["String"]>;
    sortOrder?: Maybe<Scalars["Int"]>;
    url: Scalars["String"];
};

export type ProductImageUrlArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type ProductInput = {
    attributes?: Maybe<Array<AttributeValueInput>>;
    category?: Maybe<Scalars["ID"]>;
    chargeTaxes?: Maybe<Scalars["Boolean"]>;
    collections?: Maybe<Array<Scalars["ID"]>>;
    description?: Maybe<Scalars["JSONString"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    taxCode?: Maybe<Scalars["String"]>;
    seo?: Maybe<SeoInput>;
    weight?: Maybe<Scalars["WeightScalar"]>;
    rating?: Maybe<Scalars["Float"]>;
};

export type ProductMedia = Node & {
    id: Scalars["ID"];
    sortOrder?: Maybe<Scalars["Int"]>;
    alt: Scalars["String"];
    type: ProductMediaType;
    oembedData: Scalars["JSONString"];
    url: Scalars["String"];
};

export type ProductMediaUrlArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type ProductMediaBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaCreate = {
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
    alt?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["Upload"]>;
    product: Scalars["ID"];
    mediaUrl?: Maybe<Scalars["String"]>;
};

export type ProductMediaDelete = {
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaReorder = {
    product?: Maybe<Product>;
    media?: Maybe<Array<ProductMedia>>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaType = "IMAGE" | "VIDEO";

export type ProductMediaUpdate = {
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
    alt?: Maybe<Scalars["String"]>;
};

export type ProductOrder = {
    direction: OrderDirection;
    channel?: Maybe<Scalars["String"]>;
    attributeId?: Maybe<Scalars["ID"]>;
    field?: Maybe<ProductOrderField>;
};

export type ProductOrderField =
    | "NAME"
    | "RANK"
    | "PRICE"
    | "MINIMAL_PRICE"
    | "DATE"
    | "TYPE"
    | "PUBLISHED"
    | "PUBLICATION_DATE"
    | "COLLECTION"
    | "RATING";

export type ProductPricingInfo = {
    onSale?: Maybe<Scalars["Boolean"]>;
    discount?: Maybe<TaxedMoney>;
    discountLocalCurrency?: Maybe<TaxedMoney>;
    priceRange?: Maybe<TaxedMoneyRange>;
    priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
    priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
};

export type ProductReorderAttributeValues = {
    product?: Maybe<Product>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductStockFilterInput = {
    warehouseIds?: Maybe<Array<Scalars["ID"]>>;
    quantity?: Maybe<IntRangeInput>;
};

export type ProductTranslatableContent = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    description?: Maybe<Scalars["JSONString"]>;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<ProductTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    product?: Maybe<Product>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};

export type ProductTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    product?: Maybe<Product>;
};

export type ProductTranslation = Node & {
    id: Scalars["ID"];
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
    /** @deprecated Will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
};

export type ProductType = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        slug: Scalars["String"];
        hasVariants: Scalars["Boolean"];
        isShippingRequired: Scalars["Boolean"];
        isDigital: Scalars["Boolean"];
        weight?: Maybe<Weight>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter. */
        products?: Maybe<ProductCountableConnection>;
        taxType?: Maybe<TaxType>;
        variantAttributes?: Maybe<Array<Maybe<Attribute>>>;
        productAttributes?: Maybe<Array<Maybe<Attribute>>>;
        availableAttributes?: Maybe<AttributeCountableConnection>;
    };

export type ProductTypeProductsArgs = {
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type ProductTypeVariantAttributesArgs = {
    variantSelection?: Maybe<VariantAttributeScope>;
};

export type ProductTypeAvailableAttributesArgs = {
    filter?: Maybe<AttributeFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type ProductTypeBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductTypeConfigurable = "CONFIGURABLE" | "SIMPLE";

export type ProductTypeCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<ProductTypeCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ProductTypeCountableEdge = {
    node: ProductType;
    cursor: Scalars["String"];
};

export type ProductTypeCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export type ProductTypeDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export type ProductTypeEnum = "DIGITAL" | "SHIPPABLE";

export type ProductTypeFilterInput = {
    search?: Maybe<Scalars["String"]>;
    configurable?: Maybe<ProductTypeConfigurable>;
    productType?: Maybe<ProductTypeEnum>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type ProductTypeInput = {
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
    hasVariants?: Maybe<Scalars["Boolean"]>;
    productAttributes?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    variantAttributes?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    isShippingRequired?: Maybe<Scalars["Boolean"]>;
    isDigital?: Maybe<Scalars["Boolean"]>;
    weight?: Maybe<Scalars["WeightScalar"]>;
    taxCode?: Maybe<Scalars["String"]>;
};

export type ProductTypeReorderAttributes = {
    productType?: Maybe<ProductType>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductTypeSortField = "NAME" | "DIGITAL" | "SHIPPING_REQUIRED";

export type ProductTypeSortingInput = {
    direction: OrderDirection;
    field: ProductTypeSortField;
};

export type ProductTypeUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export type ProductUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductVariant = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        sku: Scalars["String"];
        product: Product;
        trackInventory: Scalars["Boolean"];
        weight?: Maybe<Weight>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        channelListings?: Maybe<Array<ProductVariantChannelListing>>;
        pricing?: Maybe<VariantPricingInfo>;
        attributes: Array<SelectedAttribute>;
        margin?: Maybe<Scalars["Int"]>;
        quantityOrdered?: Maybe<Scalars["Int"]>;
        revenue?: Maybe<TaxedMoney>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `media` instead. */
        images?: Maybe<Array<Maybe<ProductImage>>>;
        media?: Maybe<Array<ProductMedia>>;
        translation?: Maybe<ProductVariantTranslation>;
        digitalContent?: Maybe<DigitalContent>;
        stocks?: Maybe<Array<Maybe<Stock>>>;
        quantityAvailable: Scalars["Int"];
    };

export type ProductVariantPricingArgs = {
    address?: Maybe<AddressInput>;
};

export type ProductVariantAttributesArgs = {
    variantSelection?: Maybe<VariantAttributeScope>;
};

export type ProductVariantRevenueArgs = {
    period?: Maybe<ReportingPeriod>;
};

export type ProductVariantTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductVariantStocksArgs = {
    address?: Maybe<AddressInput>;
    countryCode?: Maybe<CountryCode>;
};

export type ProductVariantQuantityAvailableArgs = {
    address?: Maybe<AddressInput>;
    countryCode?: Maybe<CountryCode>;
};

export type ProductVariantBulkCreate = {
    count: Scalars["Int"];
    productVariants: Array<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    bulkProductErrors: Array<BulkProductError>;
    errors: Array<BulkProductError>;
};

export type ProductVariantBulkCreateInput = {
    attributes: Array<BulkAttributeValueInput>;
    sku: Scalars["String"];
    trackInventory?: Maybe<Scalars["Boolean"]>;
    weight?: Maybe<Scalars["WeightScalar"]>;
    stocks?: Maybe<Array<StockInput>>;
    channelListings?: Maybe<Array<ProductVariantChannelListingAddInput>>;
};

export type ProductVariantBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantChannelListing = Node & {
    id: Scalars["ID"];
    channel: Channel;
    price?: Maybe<Money>;
    costPrice?: Maybe<Money>;
    margin?: Maybe<Scalars["Int"]>;
};

export type ProductVariantChannelListingAddInput = {
    channelId: Scalars["ID"];
    price: Scalars["PositiveDecimal"];
    costPrice?: Maybe<Scalars["PositiveDecimal"]>;
};

export type ProductVariantChannelListingUpdate = {
    variant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productChannelListingErrors: Array<ProductChannelListingError>;
    errors: Array<ProductChannelListingError>;
};

export type ProductVariantCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<ProductVariantCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ProductVariantCountableEdge = {
    node: ProductVariant;
    cursor: Scalars["String"];
};

export type ProductVariantCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
    attributes: Array<AttributeValueInput>;
    sku?: Maybe<Scalars["String"]>;
    trackInventory?: Maybe<Scalars["Boolean"]>;
    weight?: Maybe<Scalars["WeightScalar"]>;
    product: Scalars["ID"];
    stocks?: Maybe<Array<StockInput>>;
};

export type ProductVariantDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantFilterInput = {
    search?: Maybe<Scalars["String"]>;
    sku?: Maybe<Array<Maybe<Scalars["String"]>>>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type ProductVariantInput = {
    attributes?: Maybe<Array<AttributeValueInput>>;
    sku?: Maybe<Scalars["String"]>;
    trackInventory?: Maybe<Scalars["Boolean"]>;
    weight?: Maybe<Scalars["WeightScalar"]>;
};

export type ProductVariantReorder = {
    product?: Maybe<Product>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantReorderAttributeValues = {
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantSetDefault = {
    product?: Maybe<Product>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantStocksCreate = {
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    bulkStockErrors: Array<BulkStockError>;
    errors: Array<BulkStockError>;
};

export type ProductVariantStocksDelete = {
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    stockErrors: Array<StockError>;
    errors: Array<StockError>;
};

export type ProductVariantStocksUpdate = {
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    bulkStockErrors: Array<BulkStockError>;
    errors: Array<BulkStockError>;
};

export type ProductVariantTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    translation?: Maybe<ProductVariantTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    productVariant?: Maybe<ProductVariant>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};

export type ProductVariantTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductVariantTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslation = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    language: LanguageDisplay;
};

export type ProductVariantUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type PublishableChannelListingInput = {
    channelId: Scalars["ID"];
    isPublished?: Maybe<Scalars["Boolean"]>;
    publicationDate?: Maybe<Scalars["Date"]>;
};

export type Query = {
    _entities?: Maybe<Array<Maybe<_Entity>>>;
    _service?: Maybe<_Service>;
    address?: Maybe<Address>;
    addressValidationRules?: Maybe<AddressValidationData>;
    app?: Maybe<App>;
    apps?: Maybe<AppCountableConnection>;
    appsInstallations: Array<AppInstallation>;
    attribute?: Maybe<Attribute>;
    attributes?: Maybe<AttributeCountableConnection>;
    authenticated: Scalars["Boolean"];
    authenticating: Scalars["Boolean"];
    categories?: Maybe<CategoryCountableConnection>;
    category?: Maybe<Category>;
    channel?: Maybe<Channel>;
    channels?: Maybe<Array<Channel>>;
    checkout?: Maybe<Checkout>;
    checkoutLines?: Maybe<CheckoutLineCountableConnection>;
    checkouts?: Maybe<CheckoutCountableConnection>;
    collection?: Maybe<Collection>;
    collections?: Maybe<CollectionCountableConnection>;
    customers?: Maybe<UserCountableConnection>;
    digitalContent?: Maybe<DigitalContent>;
    digitalContents?: Maybe<DigitalContentCountableConnection>;
    draftOrders?: Maybe<OrderCountableConnection>;
    exportFile?: Maybe<ExportFile>;
    exportFiles?: Maybe<ExportFileCountableConnection>;
    giftCard?: Maybe<GiftCard>;
    giftCards?: Maybe<GiftCardCountableConnection>;
    homepageEvents?: Maybe<OrderEventCountableConnection>;
    me?: Maybe<User>;
    menu?: Maybe<Menu>;
    menuItem?: Maybe<MenuItem>;
    menuItems?: Maybe<MenuItemCountableConnection>;
    menus?: Maybe<MenuCountableConnection>;
    order?: Maybe<Order>;
    orderByToken?: Maybe<Order>;
    orderSettings?: Maybe<OrderSettings>;
    orders?: Maybe<OrderCountableConnection>;
    ordersTotal?: Maybe<TaxedMoney>;
    page?: Maybe<Page>;
    pageType?: Maybe<PageType>;
    pageTypes?: Maybe<PageTypeCountableConnection>;
    pages?: Maybe<PageCountableConnection>;
    payment?: Maybe<Payment>;
    payments?: Maybe<PaymentCountableConnection>;
    permissionGroup?: Maybe<Group>;
    permissionGroups?: Maybe<GroupCountableConnection>;
    plugin?: Maybe<Plugin>;
    plugins?: Maybe<PluginCountableConnection>;
    product?: Maybe<Product>;
    productType?: Maybe<ProductType>;
    productTypes?: Maybe<ProductTypeCountableConnection>;
    productVariant?: Maybe<ProductVariant>;
    productVariants?: Maybe<ProductVariantCountableConnection>;
    products?: Maybe<ProductCountableConnection>;
    reportProductSales?: Maybe<ProductVariantCountableConnection>;
    sale?: Maybe<Sale>;
    sales?: Maybe<SaleCountableConnection>;
    shippingZone?: Maybe<ShippingZone>;
    shippingZones?: Maybe<ShippingZoneCountableConnection>;
    shop: Shop;
    staffUsers?: Maybe<UserCountableConnection>;
    stock?: Maybe<Stock>;
    stocks?: Maybe<StockCountableConnection>;
    taxTypes?: Maybe<Array<Maybe<TaxType>>>;
    translation?: Maybe<TranslatableItem>;
    translations?: Maybe<TranslatableItemConnection>;
    user?: Maybe<User>;
    voucher?: Maybe<Voucher>;
    vouchers?: Maybe<VoucherCountableConnection>;
    warehouse?: Maybe<Warehouse>;
    warehouses?: Maybe<WarehouseCountableConnection>;
    webhook?: Maybe<Webhook>;
    webhookEvents?: Maybe<Array<Maybe<WebhookEvent>>>;
    webhookSamplePayload?: Maybe<Scalars["JSONString"]>;
};

export type Query_EntitiesArgs = {
    representations?: Maybe<Array<Maybe<Scalars["_Any"]>>>;
};

export type QueryAddressArgs = {
    id: Scalars["ID"];
};

export type QueryAddressValidationRulesArgs = {
    countryCode: CountryCode;
    countryArea?: Maybe<Scalars["String"]>;
    city?: Maybe<Scalars["String"]>;
    cityArea?: Maybe<Scalars["String"]>;
};

export type QueryAppArgs = {
    id?: Maybe<Scalars["ID"]>;
};

export type QueryAppsArgs = {
    filter?: Maybe<AppFilterInput>;
    sortBy?: Maybe<AppSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryAttributeArgs = {
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
};

export type QueryAttributesArgs = {
    filter?: Maybe<AttributeFilterInput>;
    sortBy?: Maybe<AttributeSortingInput>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryCategoriesArgs = {
    filter?: Maybe<CategoryFilterInput>;
    sortBy?: Maybe<CategorySortingInput>;
    level?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryCategoryArgs = {
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
};

export type QueryChannelArgs = {
    id?: Maybe<Scalars["ID"]>;
};

export type QueryCheckoutArgs = {
    token?: Maybe<Scalars["UUID"]>;
};

export type QueryCheckoutLinesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryCheckoutsArgs = {
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryCollectionArgs = {
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type QueryCollectionsArgs = {
    filter?: Maybe<CollectionFilterInput>;
    sortBy?: Maybe<CollectionSortingInput>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryCustomersArgs = {
    filter?: Maybe<CustomerFilterInput>;
    sortBy?: Maybe<UserSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryDigitalContentArgs = {
    id: Scalars["ID"];
};

export type QueryDigitalContentsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryDraftOrdersArgs = {
    sortBy?: Maybe<OrderSortingInput>;
    filter?: Maybe<OrderDraftFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryExportFileArgs = {
    id: Scalars["ID"];
};

export type QueryExportFilesArgs = {
    filter?: Maybe<ExportFileFilterInput>;
    sortBy?: Maybe<ExportFileSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryGiftCardArgs = {
    id: Scalars["ID"];
};

export type QueryGiftCardsArgs = {
    filter?: Maybe<GiftCardFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryHomepageEventsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryMenuArgs = {
    channel?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
    name?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

export type QueryMenuItemArgs = {
    id: Scalars["ID"];
    channel?: Maybe<Scalars["String"]>;
};

export type QueryMenuItemsArgs = {
    channel?: Maybe<Scalars["String"]>;
    sortBy?: Maybe<MenuItemSortingInput>;
    filter?: Maybe<MenuItemFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryMenusArgs = {
    channel?: Maybe<Scalars["String"]>;
    sortBy?: Maybe<MenuSortingInput>;
    filter?: Maybe<MenuFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryOrderArgs = {
    id: Scalars["ID"];
};

export type QueryOrderByTokenArgs = {
    token: Scalars["UUID"];
};

export type QueryOrdersArgs = {
    sortBy?: Maybe<OrderSortingInput>;
    filter?: Maybe<OrderFilterInput>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryOrdersTotalArgs = {
    period?: Maybe<ReportingPeriod>;
    channel?: Maybe<Scalars["String"]>;
};

export type QueryPageArgs = {
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
};

export type QueryPageTypeArgs = {
    id: Scalars["ID"];
};

export type QueryPageTypesArgs = {
    sortBy?: Maybe<PageTypeSortingInput>;
    filter?: Maybe<PageTypeFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryPagesArgs = {
    sortBy?: Maybe<PageSortingInput>;
    filter?: Maybe<PageFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryPaymentArgs = {
    id: Scalars["ID"];
};

export type QueryPaymentsArgs = {
    filter?: Maybe<PaymentFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryPermissionGroupArgs = {
    id: Scalars["ID"];
};

export type QueryPermissionGroupsArgs = {
    filter?: Maybe<PermissionGroupFilterInput>;
    sortBy?: Maybe<PermissionGroupSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryPluginArgs = {
    id: Scalars["ID"];
};

export type QueryPluginsArgs = {
    filter?: Maybe<PluginFilterInput>;
    sortBy?: Maybe<PluginSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryProductArgs = {
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type QueryProductTypeArgs = {
    id: Scalars["ID"];
};

export type QueryProductTypesArgs = {
    filter?: Maybe<ProductTypeFilterInput>;
    sortBy?: Maybe<ProductTypeSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryProductVariantArgs = {
    id?: Maybe<Scalars["ID"]>;
    sku?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type QueryProductVariantsArgs = {
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    channel?: Maybe<Scalars["String"]>;
    filter?: Maybe<ProductVariantFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryProductsArgs = {
    filter?: Maybe<ProductFilterInput>;
    sortBy?: Maybe<ProductOrder>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryReportProductSalesArgs = {
    period: ReportingPeriod;
    channel: Scalars["String"];
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QuerySaleArgs = {
    id: Scalars["ID"];
    channel?: Maybe<Scalars["String"]>;
};

export type QuerySalesArgs = {
    filter?: Maybe<SaleFilterInput>;
    sortBy?: Maybe<SaleSortingInput>;
    query?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryShippingZoneArgs = {
    id: Scalars["ID"];
    channel?: Maybe<Scalars["String"]>;
};

export type QueryShippingZonesArgs = {
    filter?: Maybe<ShippingZoneFilterInput>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryStaffUsersArgs = {
    filter?: Maybe<StaffUserInput>;
    sortBy?: Maybe<UserSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryStockArgs = {
    id: Scalars["ID"];
};

export type QueryStocksArgs = {
    filter?: Maybe<StockFilterInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryTranslationArgs = {
    id: Scalars["ID"];
    kind: TranslatableKinds;
};

export type QueryTranslationsArgs = {
    kind: TranslatableKinds;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
    id?: Maybe<Scalars["ID"]>;
    email?: Maybe<Scalars["String"]>;
};

export type QueryVoucherArgs = {
    id: Scalars["ID"];
    channel?: Maybe<Scalars["String"]>;
};

export type QueryVouchersArgs = {
    filter?: Maybe<VoucherFilterInput>;
    sortBy?: Maybe<VoucherSortingInput>;
    query?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryWarehouseArgs = {
    id: Scalars["ID"];
};

export type QueryWarehousesArgs = {
    filter?: Maybe<WarehouseFilterInput>;
    sortBy?: Maybe<WarehouseSortingInput>;
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type QueryWebhookArgs = {
    id: Scalars["ID"];
};

export type QueryWebhookSamplePayloadArgs = {
    eventType: WebhookSampleEventTypeEnum;
};

export type ReducedRate = {
    rate: Scalars["Float"];
    rateType: Scalars["String"];
};

export type RefreshToken = {
    token?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ReorderInput = {
    id: Scalars["ID"];
    sortOrder?: Maybe<Scalars["Int"]>;
};

export type ReportingPeriod = "TODAY" | "THIS_MONTH";

export type RequestEmailChange = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type RequestPasswordReset = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type Sale = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        type: SaleType;
        startDate: Scalars["DateTime"];
        endDate?: Maybe<Scalars["DateTime"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        categories?: Maybe<CategoryCountableConnection>;
        collections?: Maybe<CollectionCountableConnection>;
        products?: Maybe<ProductCountableConnection>;
        translation?: Maybe<SaleTranslation>;
        channelListings?: Maybe<Array<SaleChannelListing>>;
        discountValue?: Maybe<Scalars["Float"]>;
        currency?: Maybe<Scalars["String"]>;
    };

export type SaleCategoriesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type SaleCollectionsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type SaleProductsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type SaleTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type SaleAddCatalogues = {
    sale?: Maybe<Sale>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleChannelListing = Node & {
    id: Scalars["ID"];
    channel: Channel;
    discountValue: Scalars["Float"];
    currency: Scalars["String"];
};

export type SaleChannelListingAddInput = {
    channelId: Scalars["ID"];
    discountValue: Scalars["PositiveDecimal"];
};

export type SaleChannelListingInput = {
    addChannels?: Maybe<Array<SaleChannelListingAddInput>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type SaleChannelListingUpdate = {
    sale?: Maybe<Sale>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<SaleCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type SaleCountableEdge = {
    node: Sale;
    cursor: Scalars["String"];
};

export type SaleCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SaleDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SaleFilterInput = {
    status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
    saleType?: Maybe<DiscountValueTypeEnum>;
    started?: Maybe<DateTimeRangeInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type SaleInput = {
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<DiscountValueTypeEnum>;
    value?: Maybe<Scalars["PositiveDecimal"]>;
    products?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    categories?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    collections?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    startDate?: Maybe<Scalars["DateTime"]>;
    endDate?: Maybe<Scalars["DateTime"]>;
};

export type SaleRemoveCatalogues = {
    sale?: Maybe<Sale>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleSortField = "NAME" | "START_DATE" | "END_DATE" | "VALUE" | "TYPE";

export type SaleSortingInput = {
    direction: OrderDirection;
    channel?: Maybe<Scalars["String"]>;
    field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    translation?: Maybe<SaleTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    sale?: Maybe<Sale>;
};

export type SaleTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type SaleTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    sale?: Maybe<Sale>;
};

export type SaleTranslation = Node & {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    language: LanguageDisplay;
};

export type SaleType = "FIXED" | "PERCENTAGE";

export type SaleUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SelectedAttribute = {
    attribute: Attribute;
    values: Array<Maybe<AttributeValue>>;
};

export type SeoInput = {
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type SetPassword = {
    token?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
    csrfToken?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ShippingError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ShippingErrorCode;
    warehouses?: Maybe<Array<Scalars["ID"]>>;
    channels?: Maybe<Array<Scalars["ID"]>>;
};

export type ShippingErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "MAX_LESS_THAN_MIN"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE"
    | "DUPLICATED_INPUT_ITEM";

export type ShippingMethod = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        description?: Maybe<Scalars["JSONString"]>;
        minimumOrderWeight?: Maybe<Weight>;
        maximumOrderWeight?: Maybe<Weight>;
        maximumDeliveryDays?: Maybe<Scalars["Int"]>;
        minimumDeliveryDays?: Maybe<Scalars["Int"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        type?: Maybe<ShippingMethodTypeEnum>;
        translation?: Maybe<ShippingMethodTranslation>;
        channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
        price?: Maybe<Money>;
        maximumOrderPrice?: Maybe<Money>;
        minimumOrderPrice?: Maybe<Money>;
        postalCodeRules?: Maybe<Array<Maybe<ShippingMethodPostalCodeRule>>>;
        excludedProducts?: Maybe<ProductCountableConnection>;
    };

export type ShippingMethodTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShippingMethodExcludedProductsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type ShippingMethodChannelListing = Node & {
    id: Scalars["ID"];
    channel: Channel;
    minimumOrderPrice?: Maybe<Money>;
    maximumOrderPrice?: Maybe<Money>;
    price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
    channelId: Scalars["ID"];
    price?: Maybe<Scalars["PositiveDecimal"]>;
    minimumOrderPrice?: Maybe<Scalars["PositiveDecimal"]>;
    maximumOrderPrice?: Maybe<Scalars["PositiveDecimal"]>;
};

export type ShippingMethodChannelListingInput = {
    addChannels?: Maybe<Array<ShippingMethodChannelListingAddInput>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type ShippingMethodChannelListingUpdate = {
    shippingMethod?: Maybe<ShippingMethod>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingMethodPostalCodeRule = Node & {
    start?: Maybe<Scalars["String"]>;
    end?: Maybe<Scalars["String"]>;
    inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
    id: Scalars["ID"];
};

export type ShippingMethodTranslatableContent = Node & {
    id: Scalars["ID"];
    name: Scalars["String"];
    description?: Maybe<Scalars["JSONString"]>;
    translation?: Maybe<ShippingMethodTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingMethodTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    language: LanguageDisplay;
};

export type ShippingMethodTypeEnum = "PRICE" | "WEIGHT";

export type ShippingPostalCodeRulesCreateInputRange = {
    start: Scalars["String"];
    end?: Maybe<Scalars["String"]>;
};

export type ShippingPriceBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceCreate = {
    shippingZone?: Maybe<ShippingZone>;
    shippingMethod?: Maybe<ShippingMethod>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceDelete = {
    shippingMethod?: Maybe<ShippingMethod>;
    shippingZone?: Maybe<ShippingZone>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceExcludeProducts = {
    shippingMethod?: Maybe<ShippingMethod>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceExcludeProductsInput = {
    products: Array<Maybe<Scalars["ID"]>>;
};

export type ShippingPriceInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
    minimumOrderWeight?: Maybe<Scalars["WeightScalar"]>;
    maximumOrderWeight?: Maybe<Scalars["WeightScalar"]>;
    maximumDeliveryDays?: Maybe<Scalars["Int"]>;
    minimumDeliveryDays?: Maybe<Scalars["Int"]>;
    type?: Maybe<ShippingMethodTypeEnum>;
    shippingZone?: Maybe<Scalars["ID"]>;
    addPostalCodeRules?: Maybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
    deletePostalCodeRules?: Maybe<Array<Scalars["ID"]>>;
    inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
};

export type ShippingPriceRemoveProductFromExclude = {
    shippingMethod?: Maybe<ShippingMethod>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingPriceTranslationInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
};

export type ShippingPriceUpdate = {
    shippingZone?: Maybe<ShippingZone>;
    shippingMethod?: Maybe<ShippingMethod>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingZone = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        default: Scalars["Boolean"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        priceRange?: Maybe<MoneyRange>;
        countries?: Maybe<Array<Maybe<CountryDisplay>>>;
        shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
        warehouses: Array<Warehouse>;
        channels: Array<Channel>;
        description?: Maybe<Scalars["String"]>;
    };

export type ShippingZoneBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<ShippingZoneCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ShippingZoneCountableEdge = {
    node: ShippingZone;
    cursor: Scalars["String"];
};

export type ShippingZoneCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    countries?: Maybe<Array<Maybe<Scalars["String"]>>>;
    default?: Maybe<Scalars["Boolean"]>;
    addWarehouses?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    addChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type ShippingZoneDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneFilterInput = {
    search?: Maybe<Scalars["String"]>;
    channels?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type ShippingZoneUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    countries?: Maybe<Array<Maybe<Scalars["String"]>>>;
    default?: Maybe<Scalars["Boolean"]>;
    addWarehouses?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    addChannels?: Maybe<Array<Scalars["ID"]>>;
    removeWarehouses?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type Shop = {
    availablePaymentGateways: Array<PaymentGateway>;
    availableExternalAuthentications: Array<ExternalAuthentication>;
    availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
    channelCurrencies: Array<Scalars["String"]>;
    countries: Array<CountryDisplay>;
    defaultCountry?: Maybe<CountryDisplay>;
    defaultMailSenderName?: Maybe<Scalars["String"]>;
    defaultMailSenderAddress?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    domain: Domain;
    languages: Array<Maybe<LanguageDisplay>>;
    name: Scalars["String"];
    permissions: Array<Maybe<Permission>>;
    phonePrefixes: Array<Maybe<Scalars["String"]>>;
    headerText?: Maybe<Scalars["String"]>;
    includeTaxesInPrices: Scalars["Boolean"];
    displayGrossPrices: Scalars["Boolean"];
    chargeTaxesOnShipping: Scalars["Boolean"];
    trackInventoryByDefault?: Maybe<Scalars["Boolean"]>;
    defaultWeightUnit?: Maybe<WeightUnitsEnum>;
    translation?: Maybe<ShopTranslation>;
    automaticFulfillmentDigitalProducts?: Maybe<Scalars["Boolean"]>;
    defaultDigitalMaxDownloads?: Maybe<Scalars["Int"]>;
    defaultDigitalUrlValidDays?: Maybe<Scalars["Int"]>;
    companyAddress?: Maybe<Address>;
    customerSetPasswordUrl?: Maybe<Scalars["String"]>;
    staffNotificationRecipients?: Maybe<Array<Maybe<StaffNotificationRecipient>>>;
    limits: LimitInfo;
    version: Scalars["String"];
};

export type ShopAvailablePaymentGatewaysArgs = {
    currency?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type ShopAvailableShippingMethodsArgs = {
    channel: Scalars["String"];
    address?: Maybe<AddressInput>;
};

export type ShopCountriesArgs = {
    languageCode?: Maybe<LanguageCodeEnum>;
};

export type ShopTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShopAddressUpdate = {
    shop?: Maybe<Shop>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopDomainUpdate = {
    shop?: Maybe<Shop>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: ShopErrorCode;
};

export type ShopErrorCode =
    | "ALREADY_EXISTS"
    | "CANNOT_FETCH_TAX_RATES"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type ShopFetchTaxRates = {
    shop?: Maybe<Shop>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopSettingsInput = {
    headerText?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    includeTaxesInPrices?: Maybe<Scalars["Boolean"]>;
    displayGrossPrices?: Maybe<Scalars["Boolean"]>;
    chargeTaxesOnShipping?: Maybe<Scalars["Boolean"]>;
    trackInventoryByDefault?: Maybe<Scalars["Boolean"]>;
    defaultWeightUnit?: Maybe<WeightUnitsEnum>;
    automaticFulfillmentDigitalProducts?: Maybe<Scalars["Boolean"]>;
    defaultDigitalMaxDownloads?: Maybe<Scalars["Int"]>;
    defaultDigitalUrlValidDays?: Maybe<Scalars["Int"]>;
    defaultMailSenderName?: Maybe<Scalars["String"]>;
    defaultMailSenderAddress?: Maybe<Scalars["String"]>;
    customerSetPasswordUrl?: Maybe<Scalars["String"]>;
};

export type ShopSettingsTranslate = {
    shop?: Maybe<Shop>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
    headerText?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type ShopSettingsUpdate = {
    shop?: Maybe<Shop>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopTranslation = Node & {
    id: Scalars["ID"];
    headerText: Scalars["String"];
    description: Scalars["String"];
    language: LanguageDisplay;
};

export type SiteDomainInput = {
    domain?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
};

export type StaffBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
};

export type StaffCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffCreateInput = {
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    note?: Maybe<Scalars["String"]>;
    addGroups?: Maybe<Array<Scalars["ID"]>>;
    redirectUrl?: Maybe<Scalars["String"]>;
};

export type StaffDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: AccountErrorCode;
    addressType?: Maybe<AddressTypeEnum>;
    permissions?: Maybe<Array<PermissionEnum>>;
    groups?: Maybe<Array<Scalars["ID"]>>;
    users?: Maybe<Array<Scalars["ID"]>>;
};

export type StaffMemberStatus = "ACTIVE" | "DEACTIVATED";

export type StaffNotificationRecipient = Node & {
    user?: Maybe<User>;
    active?: Maybe<Scalars["Boolean"]>;
    id: Scalars["ID"];
    email?: Maybe<Scalars["String"]>;
};

export type StaffNotificationRecipientCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
    user?: Maybe<Scalars["ID"]>;
    email?: Maybe<Scalars["String"]>;
    active?: Maybe<Scalars["Boolean"]>;
};

export type StaffNotificationRecipientUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffUpdateInput = {
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    note?: Maybe<Scalars["String"]>;
    addGroups?: Maybe<Array<Scalars["ID"]>>;
    removeGroups?: Maybe<Array<Scalars["ID"]>>;
};

export type StaffUserInput = {
    status?: Maybe<StaffMemberStatus>;
    search?: Maybe<Scalars["String"]>;
};

export type Stock = Node & {
    warehouse: Warehouse;
    productVariant: ProductVariant;
    quantity: Scalars["Int"];
    id: Scalars["ID"];
    quantityAllocated: Scalars["Int"];
};

export type StockAvailability = "IN_STOCK" | "OUT_OF_STOCK";

export type StockCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<StockCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type StockCountableEdge = {
    node: Stock;
    cursor: Scalars["String"];
};

export type StockError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: StockErrorCode;
};

export type StockErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type StockFilterInput = {
    quantity?: Maybe<Scalars["Float"]>;
    search?: Maybe<Scalars["String"]>;
};

export type StockInput = {
    warehouse: Scalars["ID"];
    quantity: Scalars["Int"];
};

export type TaxType = {
    description?: Maybe<Scalars["String"]>;
    taxCode?: Maybe<Scalars["String"]>;
};

export type TaxedMoney = {
    currency: Scalars["String"];
    gross: Money;
    net: Money;
    tax: Money;
};

export type TaxedMoneyRange = {
    start?: Maybe<TaxedMoney>;
    stop?: Maybe<TaxedMoney>;
};

export type TimePeriod = {
    amount: Scalars["Int"];
    type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
    amount: Scalars["Int"];
    type: TimePeriodTypeEnum;
};

export type TimePeriodTypeEnum = "DAY" | "MONTH" | "YEAR";

export type Transaction = Node & {
    id: Scalars["ID"];
    created: Scalars["DateTime"];
    payment: Payment;
    token: Scalars["String"];
    kind: TransactionKind;
    isSuccess: Scalars["Boolean"];
    error?: Maybe<Scalars["String"]>;
    gatewayResponse: Scalars["JSONString"];
    amount?: Maybe<Money>;
};

export type TransactionKind =
    | "EXTERNAL"
    | "AUTH"
    | "PENDING"
    | "ACTION_TO_CONFIRM"
    | "REFUND"
    | "REFUND_ONGOING"
    | "CAPTURE"
    | "VOID"
    | "CONFIRM"
    | "CANCEL";

export type TranslatableItem =
    | ProductTranslatableContent
    | CollectionTranslatableContent
    | CategoryTranslatableContent
    | AttributeTranslatableContent
    | AttributeValueTranslatableContent
    | ProductVariantTranslatableContent
    | PageTranslatableContent
    | ShippingMethodTranslatableContent
    | SaleTranslatableContent
    | VoucherTranslatableContent
    | MenuItemTranslatableContent;

export type TranslatableItemConnection = {
    pageInfo: PageInfo;
    edges: Array<TranslatableItemEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type TranslatableItemEdge = {
    node: TranslatableItem;
    cursor: Scalars["String"];
};

export type TranslatableKinds =
    | "ATTRIBUTE"
    | "ATTRIBUTE_VALUE"
    | "CATEGORY"
    | "COLLECTION"
    | "MENU_ITEM"
    | "PAGE"
    | "PRODUCT"
    | "SALE"
    | "SHIPPING_METHOD"
    | "VARIANT"
    | "VOUCHER";

export type TranslationError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: TranslationErrorCode;
};

export type TranslationErrorCode = "GRAPHQL_ERROR" | "NOT_FOUND" | "REQUIRED";

export type TranslationInput = {
    seoTitle?: Maybe<Scalars["String"]>;
    seoDescription?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["JSONString"]>;
};

export type UpdateInvoiceInput = {
    number?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type UpdateMetadata = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type UpdatePrivateMetadata = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type UploadError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: UploadErrorCode;
};

export type UploadErrorCode = "GRAPHQL_ERROR";

export type User = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        lastLogin?: Maybe<Scalars["DateTime"]>;
        email: Scalars["String"];
        firstName: Scalars["String"];
        lastName: Scalars["String"];
        isStaff: Scalars["Boolean"];
        isActive: Scalars["Boolean"];
        note?: Maybe<Scalars["String"]>;
        dateJoined: Scalars["DateTime"];
        defaultShippingAddress?: Maybe<Address>;
        defaultBillingAddress?: Maybe<Address>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        addresses?: Maybe<Array<Maybe<Address>>>;
        /** @deprecated Will be removed in Saleor 4.0. Use the `checkout_tokens` field to fetch the user checkouts. */
        checkout?: Maybe<Checkout>;
        checkoutTokens?: Maybe<Array<Scalars["UUID"]>>;
        giftCards?: Maybe<GiftCardCountableConnection>;
        orders?: Maybe<OrderCountableConnection>;
        userPermissions?: Maybe<Array<Maybe<UserPermission>>>;
        permissionGroups?: Maybe<Array<Maybe<Group>>>;
        editableGroups?: Maybe<Array<Maybe<Group>>>;
        avatar?: Maybe<Image>;
        events?: Maybe<Array<Maybe<CustomerEvent>>>;
        storedPaymentSources?: Maybe<Array<Maybe<PaymentSource>>>;
        languageCode: LanguageCodeEnum;
    };

export type UserCheckoutTokensArgs = {
    channel?: Maybe<Scalars["String"]>;
};

export type UserGiftCardsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type UserOrdersArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type UserAvatarArgs = {
    size?: Maybe<Scalars["Int"]>;
};

export type UserStoredPaymentSourcesArgs = {
    channel?: Maybe<Scalars["String"]>;
};

export type UserAvatarDelete = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserAvatarUpdate = {
    user?: Maybe<User>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserBulkSetActive = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<UserCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type UserCountableEdge = {
    node: User;
    cursor: Scalars["String"];
};

export type UserCreateInput = {
    defaultBillingAddress?: Maybe<AddressInput>;
    defaultShippingAddress?: Maybe<AddressInput>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    note?: Maybe<Scalars["String"]>;
    languageCode?: Maybe<LanguageCodeEnum>;
    redirectUrl?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
};

export type UserPermission = {
    code: PermissionEnum;
    name: Scalars["String"];
    sourcePermissionGroups?: Maybe<Array<Group>>;
};

export type UserPermissionSourcePermissionGroupsArgs = {
    userId: Scalars["ID"];
};

export type UserSortField = "FIRST_NAME" | "LAST_NAME" | "EMAIL" | "ORDER_COUNT";

export type UserSortingInput = {
    direction: OrderDirection;
    field: UserSortField;
};

export type Vat = {
    countryCode: Scalars["String"];
    standardRate?: Maybe<Scalars["Float"]>;
    reducedRates: Array<Maybe<ReducedRate>>;
};

export type VariantAttributeScope = "ALL" | "VARIANT_SELECTION" | "NOT_VARIANT_SELECTION";

export type VariantMediaAssign = {
    productVariant?: Maybe<ProductVariant>;
    media?: Maybe<ProductMedia>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type VariantMediaUnassign = {
    productVariant?: Maybe<ProductVariant>;
    media?: Maybe<ProductMedia>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type VariantPricingInfo = {
    onSale?: Maybe<Scalars["Boolean"]>;
    discount?: Maybe<TaxedMoney>;
    discountLocalCurrency?: Maybe<TaxedMoney>;
    price?: Maybe<TaxedMoney>;
    priceUndiscounted?: Maybe<TaxedMoney>;
    priceLocalCurrency?: Maybe<TaxedMoney>;
};

export type VerifyToken = {
    user?: Maybe<User>;
    isValid: Scalars["Boolean"];
    payload?: Maybe<Scalars["GenericScalar"]>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type VolumeUnitsEnum =
    | "CUBIC_MILLIMETER"
    | "CUBIC_CENTIMETER"
    | "CUBIC_DECIMETER"
    | "CUBIC_METER"
    | "LITER"
    | "CUBIC_FOOT"
    | "CUBIC_INCH"
    | "CUBIC_YARD"
    | "QT"
    | "PINT"
    | "FL_OZ"
    | "ACRE_IN"
    | "ACRE_FT";

export type Voucher = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name?: Maybe<Scalars["String"]>;
        type: VoucherTypeEnum;
        code: Scalars["String"];
        usageLimit?: Maybe<Scalars["Int"]>;
        used: Scalars["Int"];
        startDate: Scalars["DateTime"];
        endDate?: Maybe<Scalars["DateTime"]>;
        applyOncePerOrder: Scalars["Boolean"];
        applyOncePerCustomer: Scalars["Boolean"];
        onlyForStaff: Scalars["Boolean"];
        discountValueType: DiscountValueTypeEnum;
        minCheckoutItemsQuantity?: Maybe<Scalars["Int"]>;
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        categories?: Maybe<CategoryCountableConnection>;
        collections?: Maybe<CollectionCountableConnection>;
        products?: Maybe<ProductCountableConnection>;
        countries?: Maybe<Array<Maybe<CountryDisplay>>>;
        translation?: Maybe<VoucherTranslation>;
        discountValue?: Maybe<Scalars["Float"]>;
        currency?: Maybe<Scalars["String"]>;
        minSpent?: Maybe<Money>;
        channelListings?: Maybe<Array<VoucherChannelListing>>;
    };

export type VoucherCategoriesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type VoucherCollectionsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type VoucherProductsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type VoucherTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type VoucherAddCatalogues = {
    voucher?: Maybe<Voucher>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherBulkDelete = {
    count: Scalars["Int"];
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherChannelListing = Node & {
    id: Scalars["ID"];
    channel: Channel;
    discountValue: Scalars["Float"];
    currency: Scalars["String"];
    minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
    channelId: Scalars["ID"];
    discountValue?: Maybe<Scalars["PositiveDecimal"]>;
    minAmountSpent?: Maybe<Scalars["PositiveDecimal"]>;
};

export type VoucherChannelListingInput = {
    addChannels?: Maybe<Array<VoucherChannelListingAddInput>>;
    removeChannels?: Maybe<Array<Scalars["ID"]>>;
};

export type VoucherChannelListingUpdate = {
    voucher?: Maybe<Voucher>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<VoucherCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type VoucherCountableEdge = {
    node: Voucher;
    cursor: Scalars["String"];
};

export type VoucherCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export type VoucherDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export type VoucherDiscountType = "FIXED" | "PERCENTAGE" | "SHIPPING";

export type VoucherFilterInput = {
    status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
    timesUsed?: Maybe<IntRangeInput>;
    discountType?: Maybe<Array<Maybe<VoucherDiscountType>>>;
    started?: Maybe<DateTimeRangeInput>;
    search?: Maybe<Scalars["String"]>;
    metadata?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type VoucherInput = {
    type?: Maybe<VoucherTypeEnum>;
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["DateTime"]>;
    endDate?: Maybe<Scalars["DateTime"]>;
    discountValueType?: Maybe<DiscountValueTypeEnum>;
    products?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    collections?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    categories?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    minCheckoutItemsQuantity?: Maybe<Scalars["Int"]>;
    countries?: Maybe<Array<Maybe<Scalars["String"]>>>;
    applyOncePerOrder?: Maybe<Scalars["Boolean"]>;
    applyOncePerCustomer?: Maybe<Scalars["Boolean"]>;
    onlyForStaff?: Maybe<Scalars["Boolean"]>;
    usageLimit?: Maybe<Scalars["Int"]>;
};

export type VoucherRemoveCatalogues = {
    voucher?: Maybe<Voucher>;
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherSortField =
    | "CODE"
    | "START_DATE"
    | "END_DATE"
    | "VALUE"
    | "TYPE"
    | "USAGE_LIMIT"
    | "MINIMUM_SPENT_AMOUNT";

export type VoucherSortingInput = {
    direction: OrderDirection;
    channel?: Maybe<Scalars["String"]>;
    field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    translation?: Maybe<VoucherTranslation>;
    /** @deprecated Will be removed in Saleor 4.0. Get model fields from the root level. */
    voucher?: Maybe<Voucher>;
};

export type VoucherTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type VoucherTranslate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    language: LanguageDisplay;
};

export type VoucherTypeEnum = "SHIPPING" | "ENTIRE_ORDER" | "SPECIFIC_PRODUCT";

export type VoucherUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export type Warehouse = Node &
    ObjectWithMetadata & {
        id: Scalars["ID"];
        name: Scalars["String"];
        slug: Scalars["String"];
        shippingZones: ShippingZoneCountableConnection;
        address: Address;
        email: Scalars["String"];
        privateMetadata: Array<Maybe<MetadataItem>>;
        metadata: Array<Maybe<MetadataItem>>;
        /** @deprecated Use address.CompanyName. This field will be removed in Saleor 4.0. */
        companyName: Scalars["String"];
    };

export type WarehouseShippingZonesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
};

export type WarehouseCountableConnection = {
    pageInfo: PageInfo;
    edges: Array<WarehouseCountableEdge>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type WarehouseCountableEdge = {
    node: Warehouse;
    cursor: Scalars["String"];
};

export type WarehouseCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseCreateInput = {
    slug?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    address: AddressInput;
    shippingZones?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type WarehouseDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: WarehouseErrorCode;
};

export type WarehouseErrorCode =
    | "ALREADY_EXISTS"
    | "GRAPHQL_ERROR"
    | "INVALID"
    | "NOT_FOUND"
    | "REQUIRED"
    | "UNIQUE";

export type WarehouseFilterInput = {
    search?: Maybe<Scalars["String"]>;
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type WarehouseShippingZoneAssign = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseShippingZoneUnassign = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseSortField = "NAME";

export type WarehouseSortingInput = {
    direction: OrderDirection;
    field: WarehouseSortField;
};

export type WarehouseUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseUpdateInput = {
    slug?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    address?: Maybe<AddressInput>;
};

export type Webhook = Node & {
    name: Scalars["String"];
    targetUrl: Scalars["String"];
    isActive: Scalars["Boolean"];
    secretKey?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    events: Array<WebhookEvent>;
    app: App;
};

export type WebhookCreate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookCreateInput = {
    name?: Maybe<Scalars["String"]>;
    targetUrl?: Maybe<Scalars["String"]>;
    events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
    app?: Maybe<Scalars["ID"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    secretKey?: Maybe<Scalars["String"]>;
};

export type WebhookDelete = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookError = {
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    code: WebhookErrorCode;
};

export type WebhookErrorCode = "GRAPHQL_ERROR" | "INVALID" | "NOT_FOUND" | "REQUIRED" | "UNIQUE";

export type WebhookEvent = {
    eventType: WebhookEventTypeEnum;
    name: Scalars["String"];
};

export type WebhookEventTypeEnum =
    | "ANY_EVENTS"
    | "ORDER_CREATED"
    | "ORDER_CONFIRMED"
    | "ORDER_FULLY_PAID"
    | "ORDER_UPDATED"
    | "ORDER_CANCELLED"
    | "ORDER_FULFILLED"
    | "INVOICE_REQUESTED"
    | "INVOICE_DELETED"
    | "INVOICE_SENT"
    | "CUSTOMER_CREATED"
    | "CUSTOMER_UPDATED"
    | "PRODUCT_CREATED"
    | "PRODUCT_UPDATED"
    | "PRODUCT_DELETED"
    | "PRODUCT_VARIANT_CREATED"
    | "PRODUCT_VARIANT_UPDATED"
    | "PRODUCT_VARIANT_DELETED"
    | "CHECKOUT_CREATED"
    | "CHECKOUT_UPDATED"
    | "FULFILLMENT_CREATED"
    | "NOTIFY_USER"
    | "PAGE_CREATED"
    | "PAGE_UPDATED"
    | "PAGE_DELETED"
    | "PAYMENT_AUTHORIZE"
    | "PAYMENT_CAPTURE"
    | "PAYMENT_CONFIRM"
    | "PAYMENT_LIST_GATEWAYS"
    | "PAYMENT_PROCESS"
    | "PAYMENT_REFUND"
    | "PAYMENT_VOID"
    | "TRANSLATION_CREATED"
    | "TRANSLATION_UPDATED";

export type WebhookSampleEventTypeEnum =
    | "ORDER_CREATED"
    | "ORDER_CONFIRMED"
    | "ORDER_FULLY_PAID"
    | "ORDER_UPDATED"
    | "ORDER_CANCELLED"
    | "ORDER_FULFILLED"
    | "INVOICE_REQUESTED"
    | "INVOICE_DELETED"
    | "INVOICE_SENT"
    | "CUSTOMER_CREATED"
    | "CUSTOMER_UPDATED"
    | "PRODUCT_CREATED"
    | "PRODUCT_UPDATED"
    | "PRODUCT_DELETED"
    | "PRODUCT_VARIANT_CREATED"
    | "PRODUCT_VARIANT_UPDATED"
    | "PRODUCT_VARIANT_DELETED"
    | "CHECKOUT_CREATED"
    | "CHECKOUT_UPDATED"
    | "FULFILLMENT_CREATED"
    | "NOTIFY_USER"
    | "PAGE_CREATED"
    | "PAGE_UPDATED"
    | "PAGE_DELETED"
    | "PAYMENT_AUTHORIZE"
    | "PAYMENT_CAPTURE"
    | "PAYMENT_CONFIRM"
    | "PAYMENT_LIST_GATEWAYS"
    | "PAYMENT_PROCESS"
    | "PAYMENT_REFUND"
    | "PAYMENT_VOID"
    | "TRANSLATION_CREATED"
    | "TRANSLATION_UPDATED";

export type WebhookUpdate = {
    /** @deprecated Use errors field instead. This field will be removed in Saleor 4.0. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookUpdateInput = {
    name?: Maybe<Scalars["String"]>;
    targetUrl?: Maybe<Scalars["String"]>;
    events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
    app?: Maybe<Scalars["ID"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    secretKey?: Maybe<Scalars["String"]>;
};

export type Weight = {
    unit: WeightUnitsEnum;
    value: Scalars["Float"];
};

export type WeightUnitsEnum = "G" | "LB" | "OZ" | "KG" | "TONNE";

export type _Entity =
    | App
    | Address
    | User
    | Group
    | ProductVariant
    | Product
    | ProductType
    | Collection
    | Category
    | ProductMedia
    | ProductImage
    | PageType;

export type _Service = {
    sdl?: Maybe<Scalars["String"]>;
};

export type UserFragment = Pick<User, "id" | "email" | "firstName" | "lastName" | "isStaff"> & {
    defaultShippingAddress?: Maybe<AddressFragment>;
    defaultBillingAddress?: Maybe<AddressFragment>;
    addresses?: Maybe<Array<Maybe<AddressFragment>>>;
    userPermissions?: Maybe<Array<Maybe<Pick<UserPermission, "code" | "name">>>>;
    avatar?: Maybe<Pick<Image, "url">>;
};

export type BaseCategoryFragment = Pick<
    Category,
    "id" | "name" | "slug" | "seoDescription" | "seoTitle"
>;

export type CategoryDetailsFragment = Pick<Category, "description"> & {
    backgroundImage?: Maybe<Pick<Image, "alt" | "url">>;
} & BaseCategoryFragment;

export type PriceFragment = {
    gross: Pick<Money, "amount" | "currency">;
    net: Pick<Money, "amount" | "currency">;
};

export type AddressFragment = Pick<
    Address,
    | "id"
    | "firstName"
    | "lastName"
    | "companyName"
    | "streetAddress1"
    | "streetAddress2"
    | "city"
    | "postalCode"
    | "countryArea"
    | "phone"
    | "isDefaultBillingAddress"
    | "isDefaultShippingAddress"
> & { country: Pick<CountryDisplay, "code" | "country"> };

export type ProductVariantFragment = Pick<
    ProductVariant,
    "id" | "name" | "sku" | "quantityAvailable"
> & {
    pricing?: Maybe<
        Pick<VariantPricingInfo, "onSale"> & {
            priceUndiscounted?: Maybe<PriceFragment>;
            price?: Maybe<PriceFragment>;
        }
    >;
    attributes: Array<{
        attribute: Pick<Attribute, "id" | "name">;
        values: Array<Maybe<Pick<AttributeValue, "id" | "name"> & { value: AttributeValue["name"] }>>;
    }>;
    product: Pick<Product, "id" | "name" | "slug"> & {
        thumbnail?: Maybe<Pick<Image, "url" | "alt">>;
        thumbnail2x?: Maybe<Pick<Image, "url">>;
        productType: Pick<ProductType, "id" | "isShippingRequired">;
    };
};

export type ShippingMethodFragment = Pick<ShippingMethod, "id" | "name"> & {
    price?: Maybe<Pick<Money, "currency" | "amount">>;
};

export type CheckoutLineFragment = Pick<CheckoutLine, "id" | "quantity"> & {
    totalPrice?: Maybe<PriceFragment>;
    variant: ProductVariantFragment;
};

export type CheckoutFragment = Pick<
    Checkout,
    | "token"
    | "id"
    | "email"
    | "isShippingRequired"
    | "discountName"
    | "translatedDiscountName"
    | "voucherCode"
> & {
    totalPrice?: Maybe<PriceFragment>;
    subtotalPrice?: Maybe<PriceFragment>;
    billingAddress?: Maybe<AddressFragment>;
    shippingAddress?: Maybe<AddressFragment>;
    availableShippingMethods: Array<Maybe<ShippingMethodFragment>>;
    shippingMethod?: Maybe<ShippingMethodFragment>;
    shippingPrice?: Maybe<PriceFragment>;
    lines?: Maybe<Array<Maybe<CheckoutLineFragment>>>;
    discount?: Maybe<Pick<Money, "currency" | "amount">>;
    availablePaymentGateways: Array<PaymentGatewayFragment>;
};

export type BaseCollectionFragment = Pick<
    Collection,
    "id" | "name" | "slug" | "seoDescription" | "seoTitle"
>;

export type CollectionDetailsFragment = Pick<Collection, "description"> & {
    backgroundImage?: Maybe<Pick<Image, "alt" | "url">>;
} & BaseCollectionFragment;

export type CheckoutErrorFragment = Pick<CheckoutError, "code" | "field" | "message">;

export type PaymentErrorFragment = Pick<PaymentError, "code" | "field" | "message">;

export type AccountErrorFragment = Pick<AccountError, "code" | "field" | "message">;

export type InvoiceFragment = Pick<Invoice, "id" | "number" | "createdAt" | "url" | "status">;

export type OrderPriceFragment = {
    gross: Pick<Money, "amount" | "currency">;
    net: Pick<Money, "amount" | "currency">;
};

export type OrderDetailFragment = Pick<
    Order,
    | "userEmail"
    | "paymentStatus"
    | "paymentStatusDisplay"
    | "status"
    | "statusDisplay"
    | "id"
    | "token"
    | "number"
> & {
    shippingAddress?: Maybe<AddressFragment>;
    lines: Array<
        Maybe<
            Pick<OrderLine, "productName" | "quantity"> & {
                variant?: Maybe<ProductVariantFragment>;
                unitPrice: Pick<TaxedMoney, "currency"> & OrderPriceFragment;
                totalPrice: Pick<TaxedMoney, "currency"> & OrderPriceFragment;
            }
        >
    >;
    subtotal: OrderPriceFragment;
    total: OrderPriceFragment;
    shippingPrice: OrderPriceFragment;
};

export type PageInfoFragment = Pick<PageInfo, "endCursor" | "hasNextPage">;

export type PaymentFragment = Pick<Payment, "id" | "gateway" | "token"> & {
    creditCard?: Maybe<
        Pick<CreditCard, "brand" | "firstDigits" | "lastDigits" | "expMonth" | "expYear">
    >;
    total?: Maybe<Pick<Money, "amount" | "currency">>;
};

export type PaymentGatewayFragment = Pick<PaymentGateway, "id" | "name" | "currencies"> & {
    config: Array<Pick<GatewayConfigLine, "field" | "value">>;
};

export type BaseProductFragment = Pick<
    Product,
    | "id"
    | "name"
    | "slug"
    | "seoDescription"
    | "isAvailableForPurchase"
    | "availableForPurchase"
    | "seoTitle"
> & { thumbnail?: Maybe<Pick<Image, "url" | "alt">>; thumbnail2x?: Maybe<Pick<Image, "url">> };

export type SelectedAttributeFieldsFragment = {
    attribute: Pick<Attribute, "id" | "name" | "slug">;
    values: Array<Maybe<Pick<AttributeValue, "id" | "name">>>;
};

export type ProductVariantFieldsFragment = Pick<
    ProductVariant,
    "id" | "sku" | "name" | "quantityAvailable"
> & {
    images?: Maybe<Array<Maybe<Pick<ProductImage, "id" | "url" | "alt">>>>;
    pricing?: Maybe<
        Pick<VariantPricingInfo, "onSale"> & {
            priceUndiscounted?: Maybe<PriceFragment>;
            price?: Maybe<PriceFragment>;
        }
    >;
    attributes: Array<{
        attribute: Pick<Attribute, "id" | "name" | "slug">;
        values: Array<Maybe<Pick<AttributeValue, "id" | "name"> & { value: AttributeValue["name"] }>>;
    }>;
};

export type ProductPricingFieldFragment = {
    pricing?: Maybe<
        Pick<ProductPricingInfo, "onSale"> & {
            priceRangeUndiscounted?: Maybe<{
                start?: Maybe<PriceFragment>;
                stop?: Maybe<PriceFragment>;
            }>;
            priceRange?: Maybe<{ start?: Maybe<PriceFragment>; stop?: Maybe<PriceFragment> }>;
        }
    >;
};

export type ProductDetailsFragment = Pick<Product, "description" | "isAvailable"> & {
    category?: Maybe<
        Pick<Category, "id" | "name" | "slug"> & {
            products?: Maybe<{
                edges: Array<{
                    node: {
                        category?: Maybe<Pick<Category, "id" | "name" | "slug">>;
                    } & BaseProductFragment &
                        ProductPricingFieldFragment;
                }>;
            }>;
        }
    >;
    images?: Maybe<Array<Maybe<Pick<ProductImage, "id" | "url">>>>;
    attributes: Array<SelectedAttributeFieldsFragment>;
    variants?: Maybe<Array<Maybe<ProductVariantFieldsFragment>>>;
} & BaseProductFragment &
    ProductPricingFieldFragment;

export type SetCustomerDefaultAddressMutationVariables = Exact<{
    id: Scalars["ID"];
    type: AddressTypeEnum;
}>;

export type SetCustomerDefaultAddressMutation = {
    accountSetDefaultAddress?: Maybe<{
        errors: Array<AccountErrorFragment>;
        user?: Maybe<UserFragment>;
    }>;
};

export type DeleteUserAddressMutationVariables = Exact<{
    addressId: Scalars["ID"];
}>;

export type DeleteUserAddressMutation = {
    accountAddressDelete?: Maybe<{ errors: Array<AccountErrorFragment>; user?: Maybe<UserFragment> }>;
};

export type CreateUserAddressMutationVariables = Exact<{
    input: AddressInput;
}>;

export type CreateUserAddressMutation = {
    accountAddressCreate?: Maybe<{
        errors: Array<AccountErrorFragment>;
        address?: Maybe<AddressFragment>;
        user?: Maybe<UserFragment>;
    }>;
};

export type UpdateUserAddressMutationVariables = Exact<{
    input: AddressInput;
    id: Scalars["ID"];
}>;

export type UpdateUserAddressMutation = {
    accountAddressUpdate?: Maybe<{
        errors: Array<AccountErrorFragment>;
        address?: Maybe<AddressFragment>;
        user?: Maybe<UserFragment>;
    }>;
};

export type TokenAuthMutationVariables = Exact<{
    email: Scalars["String"];
    password: Scalars["String"];
}>;

export type TokenAuthMutation = {
    tokenCreate?: Maybe<
        Pick<CreateToken, "csrfToken" | "refreshToken" | "token"> & {
            errors: Array<AccountErrorFragment>;
            user?: Maybe<Pick<User, "id">>;
        }
    >;
};

export type VerifyTokenMutationVariables = Exact<{
    token: Scalars["String"];
}>;

export type VerifyTokenMutation = {
    tokenVerify?: Maybe<
        Pick<VerifyToken, "isValid" | "payload"> & {
            user?: Maybe<Pick<User, "id">>;
            errors: Array<AccountErrorFragment>;
        }
    >;
};

export type RefreshTokenMutationVariables = Exact<{
    csrfToken?: Maybe<Scalars["String"]>;
    refreshToken?: Maybe<Scalars["String"]>;
}>;

export type RefreshTokenMutation = {
    tokenRefresh?: Maybe<
        Pick<RefreshToken, "token"> & {
            user?: Maybe<Pick<User, "id">>;
            errors: Array<AccountErrorFragment>;
        }
    >;
};

export type RefreshTokenWithUserMutationVariables = Exact<{
    csrfToken: Scalars["String"];
}>;

export type RefreshTokenWithUserMutation = {
    tokenRefresh?: Maybe<
        Pick<RefreshToken, "token"> & {
            user?: Maybe<UserFragment>;
            errors: Array<AccountErrorFragment>;
        }
    >;
};

export type ExternalVerifyMutationVariables = Exact<{
    pluginId?: Maybe<Scalars["String"]>;
    input: Scalars["JSONString"];
}>;

export type ExternalVerifyMutation = {
    externalVerify?: Maybe<
        Pick<ExternalVerify, "isValid" | "verifyData"> & {
            user?: Maybe<
                {
                    userPermissions?: Maybe<Array<Maybe<Pick<UserPermission, "code" | "name">>>>;
                } & UserFragment
            >;
            errors: Array<AccountErrorFragment>;
        }
    >;
};

export type ExternalRefreshMutationVariables = Exact<{
    pluginId?: Maybe<Scalars["String"]>;
    input: Scalars["JSONString"];
}>;

export type ExternalRefreshMutation = {
    externalRefresh?: Maybe<
        Pick<ExternalRefresh, "token" | "csrfToken"> & { errors: Array<AccountErrorFragment> }
    >;
};

export type ExternalObtainAccessTokensMutationVariables = Exact<{
    pluginId?: Maybe<Scalars["String"]>;
    input: Scalars["JSONString"];
}>;

export type ExternalObtainAccessTokensMutation = {
    externalObtainAccessTokens?: Maybe<
        Pick<ExternalObtainAccessTokens, "token" | "csrfToken"> & {
            user?: Maybe<UserFragment>;
            errors: Array<AccountErrorFragment>;
        }
    >;
};

export type ExternalAuthenticationUrlMutationVariables = Exact<{
    pluginId?: Maybe<Scalars["String"]>;
    input: Scalars["JSONString"];
}>;

export type ExternalAuthenticationUrlMutation = {
    externalAuthenticationUrl?: Maybe<
        Pick<ExternalAuthenticationUrl, "authenticationData"> & { errors: Array<AccountErrorFragment> }
    >;
};

export type ExternalLogoutMutationVariables = Exact<{
    pluginId?: Maybe<Scalars["String"]>;
    input: Scalars["JSONString"];
}>;

export type ExternalLogoutMutation = {
    externalLogout?: Maybe<
        Pick<ExternalLogout, "logoutData"> & { errors: Array<AccountErrorFragment> }
    >;
};

export type UpdateCheckoutLineMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    lines: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>;
}>;

export type UpdateCheckoutLineMutation = {
    checkoutLinesUpdate?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<CheckoutErrorFragment>;
    }>;
};

export type CreateCheckoutMutationVariables = Exact<{
    checkoutInput: CheckoutCreateInput;
}>;

export type CreateCheckoutMutation = {
    checkoutCreate?: Maybe<{
        errors: Array<CheckoutErrorFragment>;
        checkout?: Maybe<CheckoutFragment>;
    }>;
};

export type UpdateCheckoutBillingAddressWithEmailMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    billingAddress: AddressInput;
    email: Scalars["String"];
}>;

export type UpdateCheckoutBillingAddressWithEmailMutation = {
    checkoutBillingAddressUpdate?: Maybe<{
        errors: Array<CheckoutErrorFragment>;
        checkout?: Maybe<CheckoutFragment>;
    }>;
    checkoutEmailUpdate?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<Pick<CheckoutError, "code" | "field" | "message">>;
    }>;
};

export type UpdateCheckoutBillingAddressMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    billingAddress: AddressInput;
}>;

export type UpdateCheckoutBillingAddressMutation = {
    checkoutBillingAddressUpdate?: Maybe<{
        errors: Array<CheckoutErrorFragment>;
        checkout?: Maybe<CheckoutFragment>;
    }>;
};

export type UpdateCheckoutShippingAddressMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    shippingAddress: AddressInput;
    email: Scalars["String"];
}>;

export type UpdateCheckoutShippingAddressMutation = {
    checkoutShippingAddressUpdate?: Maybe<{
        errors: Array<CheckoutErrorFragment>;
        checkout?: Maybe<CheckoutFragment>;
    }>;
    checkoutEmailUpdate?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<CheckoutErrorFragment>;
    }>;
};

export type UpdateCheckoutShippingMethodMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    shippingMethodId: Scalars["ID"];
}>;

export type UpdateCheckoutShippingMethodMutation = {
    checkoutShippingMethodUpdate?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<CheckoutErrorFragment>;
    }>;
};

export type AddCheckoutPromoCodeMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    promoCode: Scalars["String"];
}>;

export type AddCheckoutPromoCodeMutation = {
    checkoutAddPromoCode?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<CheckoutErrorFragment>;
    }>;
};

export type RemoveCheckoutPromoCodeMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    promoCode: Scalars["String"];
}>;

export type RemoveCheckoutPromoCodeMutation = {
    checkoutRemovePromoCode?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        errors: Array<CheckoutErrorFragment>;
    }>;
};

export type CreateCheckoutPaymentMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    paymentInput: PaymentInput;
}>;

export type CreateCheckoutPaymentMutation = {
    checkoutPaymentCreate?: Maybe<{
        checkout?: Maybe<CheckoutFragment>;
        payment?: Maybe<PaymentFragment>;
        errors: Array<PaymentErrorFragment>;
    }>;
};

export type CompleteCheckoutMutationVariables = Exact<{
    checkoutId: Scalars["ID"];
    paymentData?: Maybe<Scalars["JSONString"]>;
    redirectUrl?: Maybe<Scalars["String"]>;
    storeSource?: Maybe<Scalars["Boolean"]>;
}>;

export type CompleteCheckoutMutation = {
    checkoutComplete?: Maybe<
        Pick<CheckoutComplete, "confirmationNeeded" | "confirmationData"> & {
            errors: Array<CheckoutErrorFragment>;
            order?: Maybe<OrderDetailFragment>;
        }
    >;
};

export type PasswordChangeMutationVariables = Exact<{
    newPassword: Scalars["String"];
    oldPassword: Scalars["String"];
}>;

export type PasswordChangeMutation = {
    passwordChange?: Maybe<{ errors: Array<AccountErrorFragment> }>;
};

export type ResetPasswordRequestMutationVariables = Exact<{
    email: Scalars["String"];
    redirectUrl: Scalars["String"];
}>;

export type ResetPasswordRequestMutation = {
    requestPasswordReset?: Maybe<{
        accountErrors: Array<Pick<AccountError, "field" | "message" | "code">>;
    }>;
};

export type SetPasswordMutationVariables = Exact<{
    token: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
}>;

export type SetPasswordMutation = {
    setPassword?: Maybe<
        Pick<SetPassword, "token" | "csrfToken"> & {
            errors: Array<AccountErrorFragment>;
            user?: Maybe<UserFragment>;
            accountErrors: Array<Pick<AccountError, "field" | "message" | "code">>;
        }
    >;
};

export type RegisterAccountMutationVariables = Exact<{
    email: Scalars["String"];
    password: Scalars["String"];
    redirectUrl: Scalars["String"];
}>;

export type RegisterAccountMutation = {
    accountRegister?: Maybe<
        Pick<AccountRegister, "requiresConfirmation"> & {
            accountErrors: Array<Pick<AccountError, "field" | "message" | "code">>;
        }
    >;
};

export type AccountUpdateMutationVariables = Exact<{
    input: AccountInput;
}>;

export type AccountUpdateMutation = {
    accountUpdate?: Maybe<{ errors: Array<AccountErrorFragment>; user?: Maybe<UserFragment> }>;
};

export type AccountConfirmMutationVariables = Exact<{
    email: Scalars["String"];
    token: Scalars["String"];
}>;

export type AccountConfirmMutation = {
    confirmAccount?: Maybe<{ user?: Maybe<UserFragment>; errors: Array<AccountErrorFragment> }>;
};

export type AccountRequestDeletionMutationVariables = Exact<{
    channel: Scalars["String"];
    redirectUrl: Scalars["String"];
}>;

export type AccountRequestDeletionMutation = {
    accountRequestDeletion?: Maybe<{ errors: Array<AccountErrorFragment> }>;
};

export type AccountDeleteMutationVariables = Exact<{
    token: Scalars["String"];
}>;

export type AccountDeleteMutation = {
    accountDelete?: Maybe<{ errors: Array<AccountErrorFragment>; user?: Maybe<UserFragment> }>;
};

export type RequestEmailChangeMutationVariables = Exact<{
    channel: Scalars["String"];
    newEmail: Scalars["String"];
    password: Scalars["String"];
    redirectUrl: Scalars["String"];
}>;

export type RequestEmailChangeMutation = {
    requestEmailChange?: Maybe<{ errors: Array<AccountErrorFragment>; user?: Maybe<UserFragment> }>;
};

export type ConfirmEmailChangeMutationVariables = Exact<{
    channel: Scalars["String"];
    token: Scalars["String"];
}>;

export type ConfirmEmailChangeMutation = {
    confirmEmailChange?: Maybe<{ errors: Array<AccountErrorFragment>; user?: Maybe<UserFragment> }>;
};

export type AttributesQueryVariables = Exact<{
    id: Scalars["ID"];
    channel?: Maybe<Scalars["String"]>;
}>;

export type AttributesQuery = {
    attributes?: Maybe<{
        edges: Array<{
            node: Pick<Attribute, "id" | "name" | "slug"> & {
                choices?: Maybe<{
                    edges: Array<{ node: Pick<AttributeValue, "id" | "name" | "slug"> }>;
                }>;
            };
        }>;
    }>;
};

export type CategoryListQueryVariables = Exact<{
    first: Scalars["Int"];
    after?: Maybe<Scalars["String"]>;
}>;

export type CategoryListQuery = {
    categories?: Maybe<
        Pick<CategoryCountableConnection, "totalCount"> & {
            edges: Array<{ node: BaseCategoryFragment }>;
            pageInfo: PageInfoFragment;
        }
    >;
};

export type CategoryChildrenListQueryVariables = Exact<{
    id: Scalars["ID"];
    first: Scalars["Int"];
    after?: Maybe<Scalars["String"]>;
}>;

export type CategoryChildrenListQuery = {
    category?: Maybe<
        Pick<Category, "id"> & {
            children?: Maybe<
                Pick<CategoryCountableConnection, "totalCount"> & {
                    edges: Array<{ node: BaseCategoryFragment }>;
                    pageInfo: PageInfoFragment;
                }
            >;
        }
    >;
};

export type CategoryAncestorsListQueryVariables = Exact<{
    id: Scalars["ID"];
    first: Scalars["Int"];
    after?: Maybe<Scalars["String"]>;
}>;

export type CategoryAncestorsListQuery = {
    category?: Maybe<
        Pick<Category, "id"> & {
            ancestors?: Maybe<
                Pick<CategoryCountableConnection, "totalCount"> & {
                    edges: Array<{ node: BaseCategoryFragment }>;
                    pageInfo: PageInfoFragment;
                }
            >;
        }
    >;
};

export type CategoryDetailsQueryVariables = Exact<{
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
}>;

export type CategoryDetailsQuery = { category?: Maybe<CategoryDetailsFragment> };

export type CheckoutDetailsQueryVariables = Exact<{
    token: Scalars["UUID"];
}>;

export type CheckoutDetailsQuery = { checkout?: Maybe<CheckoutFragment> };

export type UserCheckoutTokenListQueryVariables = Exact<{
    channel?: Maybe<Scalars["String"]>;
}>;

export type UserCheckoutTokenListQuery = { me?: Maybe<Pick<User, "id" | "checkoutTokens">> };

export type CheckoutProductVariantsQueryVariables = Exact<{
    ids?: Maybe<Array<Maybe<Scalars["ID"]>> | Maybe<Scalars["ID"]>>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type CheckoutProductVariantsQuery = {
    productVariants?: Maybe<{ edges: Array<{ node: ProductVariantFragment }> }>;
};

export type CollectionListQueryVariables = Exact<{
    first: Scalars["Int"];
    after?: Maybe<Scalars["String"]>;
    sortBy?: Maybe<CollectionSortingInput>;
    filter?: Maybe<CollectionFilterInput>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type CollectionListQuery = {
    collections?: Maybe<
        Pick<CollectionCountableConnection, "totalCount"> & {
            edges: Array<{ node: BaseCollectionFragment }>;
            pageInfo: PageInfoFragment;
        }
    >;
};

export type CollectionDetailsQueryVariables = Exact<{
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type CollectionDetailsQuery = { collection?: Maybe<CollectionDetailsFragment> };

export type OrdersByUserQueryVariables = Exact<{
    perPage: Scalars["Int"];
    after?: Maybe<Scalars["String"]>;
}>;

export type OrdersByUserQuery = {
    me?: Maybe<
        Pick<User, "id"> & {
            orders?: Maybe<{
                pageInfo: Pick<PageInfo, "hasNextPage" | "endCursor">;
                edges: Array<{
                    node: Pick<Order, "id" | "token" | "number" | "statusDisplay" | "created"> & {
                        total: {
                            gross: Pick<Money, "amount" | "currency">;
                            net: Pick<Money, "amount" | "currency">;
                        };
                        lines: Array<
                            Maybe<
                                Pick<OrderLine, "id"> & {
                                    variant?: Maybe<
                                        Pick<ProductVariant, "id"> & {
                                            product: Pick<Product, "name" | "id" | "slug">;
                                        }
                                    >;
                                    thumbnail?: Maybe<Pick<Image, "alt" | "url">>;
                                    thumbnail2x?: Maybe<Pick<Image, "url">>;
                                }
                            >
                        >;
                    };
                }>;
            }>;
        }
    >;
};

export type OrderByTokenQueryVariables = Exact<{
    token: Scalars["UUID"];
}>;

export type OrderByTokenQuery = { orderByToken?: Maybe<OrderDetailFragment> };

export type UserOrderByTokenQueryVariables = Exact<{
    token: Scalars["UUID"];
}>;

export type UserOrderByTokenQuery = {
    orderByToken?: Maybe<{ invoices?: Maybe<Array<Maybe<InvoiceFragment>>> } & OrderDetailFragment>;
};

export type ProductListQueryVariables = Exact<{
    after?: Maybe<Scalars["String"]>;
    first: Scalars["Int"];
    sortBy?: Maybe<ProductOrder>;
    filter?: Maybe<ProductFilterInput>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type ProductListQuery = {
    products?: Maybe<
        Pick<ProductCountableConnection, "totalCount"> & {
            edges: Array<{ node: BaseProductFragment & ProductPricingFieldFragment }>;
            pageInfo: PageInfoFragment;
        }
    >;
};

export type ProductDetailsQueryVariables = Exact<{
    id?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
    countryCode?: Maybe<CountryCode>;
    channel?: Maybe<Scalars["String"]>;
    variantSelection?: Maybe<VariantAttributeScope>;
}>;

export type ProductDetailsQuery = { product?: Maybe<ProductDetailsFragment> };

export type VariantsProductsQueryVariables = Exact<{
    ids?: Maybe<Array<Maybe<Scalars["ID"]>> | Maybe<Scalars["ID"]>>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type VariantsProductsQuery = {
    productVariants?: Maybe<{
        edges: Array<{
            node: Pick<ProductVariant, "id"> & {
                product: Pick<Product, "id"> & { productType: Pick<ProductType, "isShippingRequired"> };
            };
        }>;
    }>;
};

export type GetShopQueryVariables = Exact<{ [key: string]: never }>;

export type GetShopQuery = {
    shop: Pick<Shop, "displayGrossPrices"> & {
        defaultCountry?: Maybe<Pick<CountryDisplay, "code" | "country">>;
        countries: Array<Pick<CountryDisplay, "country" | "code">>;
    };
};

export type GetProductsQueryVariables = Exact<{
    cursor?: Maybe<Scalars["String"]>;
    perPage?: Maybe<Scalars["Int"]>;
    channel?: Maybe<Scalars["String"]>;
}>;

export type GetProductsQuery = {
    products?: Maybe<{
        pageInfo: Pick<PageInfo, "endCursor" | "hasNextPage">;
        edges: Array<{ node: Pick<Product, "id" | "name"> }>;
    }>;
};

export type GetCategoriesQueryVariables = Exact<{
    cursor?: Maybe<Scalars["String"]>;
    perPage?: Maybe<Scalars["Int"]>;
}>;

export type GetCategoriesQuery = {
    categories?: Maybe<{
        pageInfo: Pick<PageInfo, "endCursor" | "hasNextPage">;
        edges: Array<{ node: Pick<Category, "id" | "name"> }>;
    }>;
};

export type GetCollectionsQueryVariables = Exact<{
    cursor?: Maybe<Scalars["String"]>;
    perPage?: Maybe<Scalars["Int"]>;
}>;

export type GetCollectionsQuery = {
    collections?: Maybe<{
        pageInfo: Pick<PageInfo, "endCursor" | "hasNextPage">;
        edges: Array<{ node: Pick<Collection, "id" | "name"> }>;
    }>;
};

export type UserDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type UserDetailsQuery = Pick<Query, "authenticated" | "authenticating"> & {
    user?: Maybe<UserFragment>;
};

export const AddressFragmentDoc = gql`
    fragment Address on Address {
        id
        firstName
        lastName
        companyName
        streetAddress1
        streetAddress2
        city
        postalCode
        country {
            code
            country
        }
        countryArea
        phone
        isDefaultBillingAddress
        isDefaultShippingAddress
    }
`;
export const UserFragmentDoc = gql`
    fragment User on User {
        id
        email
        firstName
        lastName
        isStaff
        defaultShippingAddress {
            ...Address
        }
        defaultBillingAddress {
            ...Address
        }
        addresses {
            ...Address
        }
        userPermissions {
            code
            name
        }
        avatar {
            url
        }
    }
    ${AddressFragmentDoc}
`;
export const BaseCategoryFragmentDoc = gql`
    fragment BaseCategory on Category {
        id
        name
        slug
        seoDescription
        seoTitle
    }
`;
export const CategoryDetailsFragmentDoc = gql`
    fragment CategoryDetails on Category {
        ...BaseCategory
        backgroundImage {
            alt
            url
        }
        description
    }
    ${BaseCategoryFragmentDoc}
`;
export const PriceFragmentDoc = gql`
    fragment Price on TaxedMoney {
        gross {
            amount
            currency
        }
        net {
            amount
            currency
        }
    }
`;
export const ShippingMethodFragmentDoc = gql`
    fragment ShippingMethod on ShippingMethod {
        id
        name
        price {
            currency
            amount
        }
    }
`;
export const ProductVariantFragmentDoc = gql`
    fragment ProductVariant on ProductVariant {
        id
        name
        sku
        quantityAvailable
        pricing {
            onSale
            priceUndiscounted {
                ...Price
            }
            price {
                ...Price
            }
        }
        attributes {
            attribute {
                id
                name
            }
            values {
                id
                name
                value: name
            }
        }
        product {
            id
            name
            slug
            thumbnail {
                url
                alt
            }
            thumbnail2x: thumbnail(size: 510) {
                url
            }
            productType {
                id
                isShippingRequired
            }
        }
    }
    ${PriceFragmentDoc}
`;
export const CheckoutLineFragmentDoc = gql`
    fragment CheckoutLine on CheckoutLine {
        id
        quantity
        totalPrice {
            ...Price
        }
        variant {
            ...ProductVariant
        }
    }
    ${PriceFragmentDoc}
    ${ProductVariantFragmentDoc}
`;
export const PaymentGatewayFragmentDoc = gql`
    fragment PaymentGateway on PaymentGateway {
        id
        name
        config {
            field
            value
        }
        currencies
    }
`;
export const CheckoutFragmentDoc = gql`
    fragment Checkout on Checkout {
        token
        id
        totalPrice {
            ...Price
        }
        subtotalPrice {
            ...Price
        }
        billingAddress {
            ...Address
        }
        shippingAddress {
            ...Address
        }
        email
        availableShippingMethods {
            ...ShippingMethod
        }
        shippingMethod {
            ...ShippingMethod
        }
        shippingPrice {
            ...Price
        }
        lines {
            ...CheckoutLine
        }
        isShippingRequired
        discount {
            currency
            amount
        }
        discountName
        translatedDiscountName
        voucherCode
        availablePaymentGateways {
            ...PaymentGateway
        }
    }
    ${PriceFragmentDoc}
    ${AddressFragmentDoc}
    ${ShippingMethodFragmentDoc}
    ${CheckoutLineFragmentDoc}
    ${PaymentGatewayFragmentDoc}
`;
export const BaseCollectionFragmentDoc = gql`
    fragment BaseCollection on Collection {
        id
        name
        slug
        seoDescription
        seoTitle
    }
`;
export const CollectionDetailsFragmentDoc = gql`
    fragment CollectionDetails on Collection {
        ...BaseCollection
        backgroundImage {
            alt
            url
        }
        description
    }
    ${BaseCollectionFragmentDoc}
`;
export const CheckoutErrorFragmentDoc = gql`
    fragment CheckoutError on CheckoutError {
        code
        field
        message
    }
`;
export const PaymentErrorFragmentDoc = gql`
    fragment PaymentError on PaymentError {
        code
        field
        message
    }
`;
export const AccountErrorFragmentDoc = gql`
    fragment AccountError on AccountError {
        code
        field
        message
    }
`;
export const InvoiceFragmentDoc = gql`
    fragment InvoiceFragment on Invoice {
        id
        number
        createdAt
        url
        status
    }
`;
export const OrderPriceFragmentDoc = gql`
    fragment OrderPrice on TaxedMoney {
        gross {
            amount
            currency
        }
        net {
            amount
            currency
        }
    }
`;
export const OrderDetailFragmentDoc = gql`
    fragment OrderDetail on Order {
        userEmail
        paymentStatus
        paymentStatusDisplay
        status
        statusDisplay
        id
        token
        number
        shippingAddress {
            ...Address
        }
        lines {
            productName
            quantity
            variant {
                ...ProductVariant
            }
            unitPrice {
                currency
                ...OrderPrice
            }
            totalPrice {
                currency
                ...OrderPrice
            }
        }
        subtotal {
            ...OrderPrice
        }
        total {
            ...OrderPrice
        }
        shippingPrice {
            ...OrderPrice
        }
    }
    ${AddressFragmentDoc}
    ${ProductVariantFragmentDoc}
    ${OrderPriceFragmentDoc}
`;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
        endCursor
        hasNextPage
    }
`;
export const PaymentFragmentDoc = gql`
    fragment Payment on Payment {
        id
        gateway
        token
        creditCard {
            brand
            firstDigits
            lastDigits
            expMonth
            expYear
        }
        total {
            amount
            currency
        }
    }
`;
export const BaseProductFragmentDoc = gql`
    fragment BaseProduct on Product {
        id
        name
        slug
        seoDescription
        isAvailableForPurchase
        availableForPurchase
        seoTitle
        thumbnail {
            url
            alt
        }
        thumbnail2x: thumbnail(size: 510) {
            url
        }
    }
`;
export const ProductPricingFieldFragmentDoc = gql`
    fragment ProductPricingField on Product {
        pricing {
            onSale
            priceRangeUndiscounted {
                start {
                    ...Price
                }
                stop {
                    ...Price
                }
            }
            priceRange {
                start {
                    ...Price
                }
                stop {
                    ...Price
                }
            }
        }
    }
    ${PriceFragmentDoc}
`;
export const SelectedAttributeFieldsFragmentDoc = gql`
    fragment SelectedAttributeFields on SelectedAttribute {
        attribute {
            id
            name
            slug
        }
        values {
            id
            name
        }
    }
`;
export const ProductVariantFieldsFragmentDoc = gql`
    fragment ProductVariantFields on ProductVariant {
        id
        sku
        name
        quantityAvailable(countryCode: $countryCode)
        images {
            id
            url
            alt
        }
        pricing {
            onSale
            priceUndiscounted {
                ...Price
            }
            price {
                ...Price
            }
        }
        attributes(variantSelection: $variantSelection) {
            attribute {
                id
                name
                slug
            }
            values {
                id
                name
                value: name
            }
        }
    }
    ${PriceFragmentDoc}
`;
export const ProductDetailsFragmentDoc = gql`
    fragment ProductDetails on Product {
        ...BaseProduct
        ...ProductPricingField
        description
        category {
            id
            name
            slug
            products(first: 3, channel: $channel) {
                edges {
                    node {
                        ...BaseProduct
                        ...ProductPricingField
                        category {
                            id
                            name
                            slug
                        }
                    }
                }
            }
        }
        images {
            id
            url
        }
        attributes {
            ...SelectedAttributeFields
        }
        variants {
            ...ProductVariantFields
        }
        isAvailable
    }
    ${BaseProductFragmentDoc}
    ${ProductPricingFieldFragmentDoc}
    ${SelectedAttributeFieldsFragmentDoc}
    ${ProductVariantFieldsFragmentDoc}
`;
export const SetCustomerDefaultAddressDocument = gql`
    mutation SetCustomerDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
        accountSetDefaultAddress(id: $id, type: $type) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type SetCustomerDefaultAddressMutationFn = Apollo.MutationFunction<
    SetCustomerDefaultAddressMutation,
    SetCustomerDefaultAddressMutationVariables
>;

/**
 * __useSetCustomerDefaultAddressMutation__
 *
 * To run a mutation, you first call `useSetCustomerDefaultAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCustomerDefaultAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCustomerDefaultAddressMutation, { data, loading, error }] = useSetCustomerDefaultAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useSetCustomerDefaultAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        SetCustomerDefaultAddressMutation,
        SetCustomerDefaultAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        SetCustomerDefaultAddressMutation,
        SetCustomerDefaultAddressMutationVariables
    >(SetCustomerDefaultAddressDocument, options);
}
export type SetCustomerDefaultAddressMutationHookResult = ReturnType<
    typeof useSetCustomerDefaultAddressMutation
>;
export type SetCustomerDefaultAddressMutationResult =
    Apollo.MutationResult<SetCustomerDefaultAddressMutation>;
export type SetCustomerDefaultAddressMutationOptions = Apollo.BaseMutationOptions<
    SetCustomerDefaultAddressMutation,
    SetCustomerDefaultAddressMutationVariables
>;
export const DeleteUserAddressDocument = gql`
    mutation DeleteUserAddress($addressId: ID!) {
        accountAddressDelete(id: $addressId) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type DeleteUserAddressMutationFn = Apollo.MutationFunction<
    DeleteUserAddressMutation,
    DeleteUserAddressMutationVariables
>;

/**
 * __useDeleteUserAddressMutation__
 *
 * To run a mutation, you first call `useDeleteUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAddressMutation, { data, loading, error }] = useDeleteUserAddressMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useDeleteUserAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        DeleteUserAddressMutation,
        DeleteUserAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteUserAddressMutation, DeleteUserAddressMutationVariables>(
        DeleteUserAddressDocument,
        options
    );
}
export type DeleteUserAddressMutationHookResult = ReturnType<typeof useDeleteUserAddressMutation>;
export type DeleteUserAddressMutationResult = Apollo.MutationResult<DeleteUserAddressMutation>;
export type DeleteUserAddressMutationOptions = Apollo.BaseMutationOptions<
    DeleteUserAddressMutation,
    DeleteUserAddressMutationVariables
>;
export const CreateUserAddressDocument = gql`
    mutation CreateUserAddress($input: AddressInput!) {
        accountAddressCreate(input: $input) {
            errors: accountErrors {
                ...AccountError
            }
            address {
                ...Address
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${AddressFragmentDoc}
    ${UserFragmentDoc}
`;
export type CreateUserAddressMutationFn = Apollo.MutationFunction<
    CreateUserAddressMutation,
    CreateUserAddressMutationVariables
>;

/**
 * __useCreateUserAddressMutation__
 *
 * To run a mutation, you first call `useCreateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserAddressMutation, { data, loading, error }] = useCreateUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateUserAddressMutation,
        CreateUserAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateUserAddressMutation, CreateUserAddressMutationVariables>(
        CreateUserAddressDocument,
        options
    );
}
export type CreateUserAddressMutationHookResult = ReturnType<typeof useCreateUserAddressMutation>;
export type CreateUserAddressMutationResult = Apollo.MutationResult<CreateUserAddressMutation>;
export type CreateUserAddressMutationOptions = Apollo.BaseMutationOptions<
    CreateUserAddressMutation,
    CreateUserAddressMutationVariables
>;
export const UpdateUserAddressDocument = gql`
    mutation UpdateUserAddress($input: AddressInput!, $id: ID!) {
        accountAddressUpdate(input: $input, id: $id) {
            errors: accountErrors {
                ...AccountError
            }
            address {
                ...Address
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${AddressFragmentDoc}
    ${UserFragmentDoc}
`;
export type UpdateUserAddressMutationFn = Apollo.MutationFunction<
    UpdateUserAddressMutation,
    UpdateUserAddressMutationVariables
>;

/**
 * __useUpdateUserAddressMutation__
 *
 * To run a mutation, you first call `useUpdateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAddressMutation, { data, loading, error }] = useUpdateUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateUserAddressMutation,
        UpdateUserAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>(
        UpdateUserAddressDocument,
        options
    );
}
export type UpdateUserAddressMutationHookResult = ReturnType<typeof useUpdateUserAddressMutation>;
export type UpdateUserAddressMutationResult = Apollo.MutationResult<UpdateUserAddressMutation>;
export type UpdateUserAddressMutationOptions = Apollo.BaseMutationOptions<
    UpdateUserAddressMutation,
    UpdateUserAddressMutationVariables
>;
export const TokenAuthDocument = gql`
    mutation TokenAuth($email: String!, $password: String!) {
        tokenCreate(email: $email, password: $password) {
            csrfToken
            refreshToken
            token
            errors: accountErrors {
                ...AccountError
            }
            user {
                id
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type TokenAuthMutationFn = Apollo.MutationFunction<
    TokenAuthMutation,
    TokenAuthMutationVariables
>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenAuthMutation(
    baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(
        TokenAuthDocument,
        options
    );
}
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<
    TokenAuthMutation,
    TokenAuthMutationVariables
>;
export const VerifyTokenDocument = gql`
    mutation VerifyToken($token: String!) {
        tokenVerify(token: $token) {
            isValid
            payload
            user {
                id
            }
            errors: accountErrors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type VerifyTokenMutationFn = Apollo.MutationFunction<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(
    baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(
        VerifyTokenDocument,
        options
    );
}
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($csrfToken: String, $refreshToken: String) {
        tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
            token
            user {
                id
            }
            errors: accountErrors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type RefreshTokenMutationFn = Apollo.MutationFunction<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      csrfToken: // value for 'csrfToken'
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(
    baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
        RefreshTokenDocument,
        options
    );
}
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
>;
export const RefreshTokenWithUserDocument = gql`
    mutation refreshTokenWithUser($csrfToken: String!) {
        tokenRefresh(csrfToken: $csrfToken) {
            token
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
    ${UserFragmentDoc}
    ${AccountErrorFragmentDoc}
`;
export type RefreshTokenWithUserMutationFn = Apollo.MutationFunction<
    RefreshTokenWithUserMutation,
    RefreshTokenWithUserMutationVariables
>;

/**
 * __useRefreshTokenWithUserMutation__
 *
 * To run a mutation, you first call `useRefreshTokenWithUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenWithUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenWithUserMutation, { data, loading, error }] = useRefreshTokenWithUserMutation({
 *   variables: {
 *      csrfToken: // value for 'csrfToken'
 *   },
 * });
 */
export function useRefreshTokenWithUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RefreshTokenWithUserMutation,
        RefreshTokenWithUserMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>(
        RefreshTokenWithUserDocument,
        options
    );
}
export type RefreshTokenWithUserMutationHookResult = ReturnType<typeof useRefreshTokenWithUserMutation>;
export type RefreshTokenWithUserMutationResult = Apollo.MutationResult<RefreshTokenWithUserMutation>;
export type RefreshTokenWithUserMutationOptions = Apollo.BaseMutationOptions<
    RefreshTokenWithUserMutation,
    RefreshTokenWithUserMutationVariables
>;
export const ExternalVerifyDocument = gql`
    mutation externalVerify(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalVerify(pluginId: $pluginId, input: $input) {
            isValid
            verifyData
            user {
                ...User
                userPermissions {
                    code
                    name
                }
            }
            errors {
                ...AccountError
            }
        }
    }
    ${UserFragmentDoc}
    ${AccountErrorFragmentDoc}
`;
export type ExternalVerifyMutationFn = Apollo.MutationFunction<
    ExternalVerifyMutation,
    ExternalVerifyMutationVariables
>;

/**
 * __useExternalVerifyMutation__
 *
 * To run a mutation, you first call `useExternalVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExternalVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [externalVerifyMutation, { data, loading, error }] = useExternalVerifyMutation({
 *   variables: {
 *      pluginId: // value for 'pluginId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalVerifyMutation(
    baseOptions?: Apollo.MutationHookOptions<ExternalVerifyMutation, ExternalVerifyMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ExternalVerifyMutation, ExternalVerifyMutationVariables>(
        ExternalVerifyDocument,
        options
    );
}
export type ExternalVerifyMutationHookResult = ReturnType<typeof useExternalVerifyMutation>;
export type ExternalVerifyMutationResult = Apollo.MutationResult<ExternalVerifyMutation>;
export type ExternalVerifyMutationOptions = Apollo.BaseMutationOptions<
    ExternalVerifyMutation,
    ExternalVerifyMutationVariables
>;
export const ExternalRefreshDocument = gql`
    mutation externalRefresh(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalRefresh(pluginId: $pluginId, input: $input) {
            token
            csrfToken
            errors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type ExternalRefreshMutationFn = Apollo.MutationFunction<
    ExternalRefreshMutation,
    ExternalRefreshMutationVariables
>;

/**
 * __useExternalRefreshMutation__
 *
 * To run a mutation, you first call `useExternalRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExternalRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [externalRefreshMutation, { data, loading, error }] = useExternalRefreshMutation({
 *   variables: {
 *      pluginId: // value for 'pluginId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalRefreshMutation(
    baseOptions?: Apollo.MutationHookOptions<ExternalRefreshMutation, ExternalRefreshMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ExternalRefreshMutation, ExternalRefreshMutationVariables>(
        ExternalRefreshDocument,
        options
    );
}
export type ExternalRefreshMutationHookResult = ReturnType<typeof useExternalRefreshMutation>;
export type ExternalRefreshMutationResult = Apollo.MutationResult<ExternalRefreshMutation>;
export type ExternalRefreshMutationOptions = Apollo.BaseMutationOptions<
    ExternalRefreshMutation,
    ExternalRefreshMutationVariables
>;
export const ExternalObtainAccessTokensDocument = gql`
    mutation externalObtainAccessTokens(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalObtainAccessTokens(pluginId: $pluginId, input: $input) {
            token
            csrfToken
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
    ${UserFragmentDoc}
    ${AccountErrorFragmentDoc}
`;
export type ExternalObtainAccessTokensMutationFn = Apollo.MutationFunction<
    ExternalObtainAccessTokensMutation,
    ExternalObtainAccessTokensMutationVariables
>;

/**
 * __useExternalObtainAccessTokensMutation__
 *
 * To run a mutation, you first call `useExternalObtainAccessTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExternalObtainAccessTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [externalObtainAccessTokensMutation, { data, loading, error }] = useExternalObtainAccessTokensMutation({
 *   variables: {
 *      pluginId: // value for 'pluginId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalObtainAccessTokensMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ExternalObtainAccessTokensMutation,
        ExternalObtainAccessTokensMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        ExternalObtainAccessTokensMutation,
        ExternalObtainAccessTokensMutationVariables
    >(ExternalObtainAccessTokensDocument, options);
}
export type ExternalObtainAccessTokensMutationHookResult = ReturnType<
    typeof useExternalObtainAccessTokensMutation
>;
export type ExternalObtainAccessTokensMutationResult =
    Apollo.MutationResult<ExternalObtainAccessTokensMutation>;
export type ExternalObtainAccessTokensMutationOptions = Apollo.BaseMutationOptions<
    ExternalObtainAccessTokensMutation,
    ExternalObtainAccessTokensMutationVariables
>;
export const ExternalAuthenticationUrlDocument = gql`
    mutation externalAuthenticationUrl(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalAuthenticationUrl(pluginId: $pluginId, input: $input) {
            authenticationData
            errors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type ExternalAuthenticationUrlMutationFn = Apollo.MutationFunction<
    ExternalAuthenticationUrlMutation,
    ExternalAuthenticationUrlMutationVariables
>;

/**
 * __useExternalAuthenticationUrlMutation__
 *
 * To run a mutation, you first call `useExternalAuthenticationUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExternalAuthenticationUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [externalAuthenticationUrlMutation, { data, loading, error }] = useExternalAuthenticationUrlMutation({
 *   variables: {
 *      pluginId: // value for 'pluginId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalAuthenticationUrlMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ExternalAuthenticationUrlMutation,
        ExternalAuthenticationUrlMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        ExternalAuthenticationUrlMutation,
        ExternalAuthenticationUrlMutationVariables
    >(ExternalAuthenticationUrlDocument, options);
}
export type ExternalAuthenticationUrlMutationHookResult = ReturnType<
    typeof useExternalAuthenticationUrlMutation
>;
export type ExternalAuthenticationUrlMutationResult =
    Apollo.MutationResult<ExternalAuthenticationUrlMutation>;
export type ExternalAuthenticationUrlMutationOptions = Apollo.BaseMutationOptions<
    ExternalAuthenticationUrlMutation,
    ExternalAuthenticationUrlMutationVariables
>;
export const ExternalLogoutDocument = gql`
    mutation externalLogout(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalLogout(pluginId: $pluginId, input: $input) {
            logoutData
            errors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type ExternalLogoutMutationFn = Apollo.MutationFunction<
    ExternalLogoutMutation,
    ExternalLogoutMutationVariables
>;

/**
 * __useExternalLogoutMutation__
 *
 * To run a mutation, you first call `useExternalLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExternalLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [externalLogoutMutation, { data, loading, error }] = useExternalLogoutMutation({
 *   variables: {
 *      pluginId: // value for 'pluginId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalLogoutMutation(
    baseOptions?: Apollo.MutationHookOptions<ExternalLogoutMutation, ExternalLogoutMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ExternalLogoutMutation, ExternalLogoutMutationVariables>(
        ExternalLogoutDocument,
        options
    );
}
export type ExternalLogoutMutationHookResult = ReturnType<typeof useExternalLogoutMutation>;
export type ExternalLogoutMutationResult = Apollo.MutationResult<ExternalLogoutMutation>;
export type ExternalLogoutMutationOptions = Apollo.BaseMutationOptions<
    ExternalLogoutMutation,
    ExternalLogoutMutationVariables
>;
export const UpdateCheckoutLineDocument = gql`
    mutation UpdateCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
        checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                ...CheckoutError
            }
        }
    }
    ${CheckoutFragmentDoc}
    ${CheckoutErrorFragmentDoc}
`;
export type UpdateCheckoutLineMutationFn = Apollo.MutationFunction<
    UpdateCheckoutLineMutation,
    UpdateCheckoutLineMutationVariables
>;

/**
 * __useUpdateCheckoutLineMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutLineMutation, { data, loading, error }] = useUpdateCheckoutLineMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      lines: // value for 'lines'
 *   },
 * });
 */
export function useUpdateCheckoutLineMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateCheckoutLineMutation,
        UpdateCheckoutLineMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateCheckoutLineMutation, UpdateCheckoutLineMutationVariables>(
        UpdateCheckoutLineDocument,
        options
    );
}
export type UpdateCheckoutLineMutationHookResult = ReturnType<typeof useUpdateCheckoutLineMutation>;
export type UpdateCheckoutLineMutationResult = Apollo.MutationResult<UpdateCheckoutLineMutation>;
export type UpdateCheckoutLineMutationOptions = Apollo.BaseMutationOptions<
    UpdateCheckoutLineMutation,
    UpdateCheckoutLineMutationVariables
>;
export const CreateCheckoutDocument = gql`
    mutation CreateCheckout($checkoutInput: CheckoutCreateInput!) {
        checkoutCreate(input: $checkoutInput) {
            errors: checkoutErrors {
                ...CheckoutError
            }
            checkout {
                ...Checkout
            }
        }
    }
    ${CheckoutErrorFragmentDoc}
    ${CheckoutFragmentDoc}
`;
export type CreateCheckoutMutationFn = Apollo.MutationFunction<
    CreateCheckoutMutation,
    CreateCheckoutMutationVariables
>;

/**
 * __useCreateCheckoutMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutMutation, { data, loading, error }] = useCreateCheckoutMutation({
 *   variables: {
 *      checkoutInput: // value for 'checkoutInput'
 *   },
 * });
 */
export function useCreateCheckoutMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateCheckoutMutation, CreateCheckoutMutationVariables>(
        CreateCheckoutDocument,
        options
    );
}
export type CreateCheckoutMutationHookResult = ReturnType<typeof useCreateCheckoutMutation>;
export type CreateCheckoutMutationResult = Apollo.MutationResult<CreateCheckoutMutation>;
export type CreateCheckoutMutationOptions = Apollo.BaseMutationOptions<
    CreateCheckoutMutation,
    CreateCheckoutMutationVariables
>;
export const UpdateCheckoutBillingAddressWithEmailDocument = gql`
    mutation UpdateCheckoutBillingAddressWithEmail(
        $checkoutId: ID!
        $billingAddress: AddressInput!
        $email: String!
    ) {
        checkoutBillingAddressUpdate(checkoutId: $checkoutId, billingAddress: $billingAddress) {
            errors: checkoutErrors {
                ...CheckoutError
            }
            checkout {
                ...Checkout
            }
        }
        checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                code
                field
                message
            }
        }
    }
    ${CheckoutErrorFragmentDoc}
    ${CheckoutFragmentDoc}
`;
export type UpdateCheckoutBillingAddressWithEmailMutationFn = Apollo.MutationFunction<
    UpdateCheckoutBillingAddressWithEmailMutation,
    UpdateCheckoutBillingAddressWithEmailMutationVariables
>;

/**
 * __useUpdateCheckoutBillingAddressWithEmailMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutBillingAddressWithEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutBillingAddressWithEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutBillingAddressWithEmailMutation, { data, loading, error }] = useUpdateCheckoutBillingAddressWithEmailMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      billingAddress: // value for 'billingAddress'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateCheckoutBillingAddressWithEmailMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateCheckoutBillingAddressWithEmailMutation,
        UpdateCheckoutBillingAddressWithEmailMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateCheckoutBillingAddressWithEmailMutation,
        UpdateCheckoutBillingAddressWithEmailMutationVariables
    >(UpdateCheckoutBillingAddressWithEmailDocument, options);
}
export type UpdateCheckoutBillingAddressWithEmailMutationHookResult = ReturnType<
    typeof useUpdateCheckoutBillingAddressWithEmailMutation
>;
export type UpdateCheckoutBillingAddressWithEmailMutationResult =
    Apollo.MutationResult<UpdateCheckoutBillingAddressWithEmailMutation>;
export type UpdateCheckoutBillingAddressWithEmailMutationOptions = Apollo.BaseMutationOptions<
    UpdateCheckoutBillingAddressWithEmailMutation,
    UpdateCheckoutBillingAddressWithEmailMutationVariables
>;
export const UpdateCheckoutBillingAddressDocument = gql`
    mutation UpdateCheckoutBillingAddress($checkoutId: ID!, $billingAddress: AddressInput!) {
        checkoutBillingAddressUpdate(checkoutId: $checkoutId, billingAddress: $billingAddress) {
            errors: checkoutErrors {
                ...CheckoutError
            }
            checkout {
                ...Checkout
            }
        }
    }
    ${CheckoutErrorFragmentDoc}
    ${CheckoutFragmentDoc}
`;
export type UpdateCheckoutBillingAddressMutationFn = Apollo.MutationFunction<
    UpdateCheckoutBillingAddressMutation,
    UpdateCheckoutBillingAddressMutationVariables
>;

/**
 * __useUpdateCheckoutBillingAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutBillingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutBillingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutBillingAddressMutation, { data, loading, error }] = useUpdateCheckoutBillingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      billingAddress: // value for 'billingAddress'
 *   },
 * });
 */
export function useUpdateCheckoutBillingAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateCheckoutBillingAddressMutation,
        UpdateCheckoutBillingAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateCheckoutBillingAddressMutation,
        UpdateCheckoutBillingAddressMutationVariables
    >(UpdateCheckoutBillingAddressDocument, options);
}
export type UpdateCheckoutBillingAddressMutationHookResult = ReturnType<
    typeof useUpdateCheckoutBillingAddressMutation
>;
export type UpdateCheckoutBillingAddressMutationResult =
    Apollo.MutationResult<UpdateCheckoutBillingAddressMutation>;
export type UpdateCheckoutBillingAddressMutationOptions = Apollo.BaseMutationOptions<
    UpdateCheckoutBillingAddressMutation,
    UpdateCheckoutBillingAddressMutationVariables
>;
export const UpdateCheckoutShippingAddressDocument = gql`
    mutation UpdateCheckoutShippingAddress(
        $checkoutId: ID!
        $shippingAddress: AddressInput!
        $email: String!
    ) {
        checkoutShippingAddressUpdate(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {
            errors: checkoutErrors {
                ...CheckoutError
            }
            checkout {
                ...Checkout
            }
        }
        checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                ...CheckoutError
            }
        }
    }
    ${CheckoutErrorFragmentDoc}
    ${CheckoutFragmentDoc}
`;
export type UpdateCheckoutShippingAddressMutationFn = Apollo.MutationFunction<
    UpdateCheckoutShippingAddressMutation,
    UpdateCheckoutShippingAddressMutationVariables
>;

/**
 * __useUpdateCheckoutShippingAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutShippingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutShippingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutShippingAddressMutation, { data, loading, error }] = useUpdateCheckoutShippingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      shippingAddress: // value for 'shippingAddress'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateCheckoutShippingAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateCheckoutShippingAddressMutation,
        UpdateCheckoutShippingAddressMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateCheckoutShippingAddressMutation,
        UpdateCheckoutShippingAddressMutationVariables
    >(UpdateCheckoutShippingAddressDocument, options);
}
export type UpdateCheckoutShippingAddressMutationHookResult = ReturnType<
    typeof useUpdateCheckoutShippingAddressMutation
>;
export type UpdateCheckoutShippingAddressMutationResult =
    Apollo.MutationResult<UpdateCheckoutShippingAddressMutation>;
export type UpdateCheckoutShippingAddressMutationOptions = Apollo.BaseMutationOptions<
    UpdateCheckoutShippingAddressMutation,
    UpdateCheckoutShippingAddressMutationVariables
>;
export const UpdateCheckoutShippingMethodDocument = gql`
    mutation UpdateCheckoutShippingMethod($checkoutId: ID!, $shippingMethodId: ID!) {
        checkoutShippingMethodUpdate(checkoutId: $checkoutId, shippingMethodId: $shippingMethodId) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                ...CheckoutError
            }
        }
    }
    ${CheckoutFragmentDoc}
    ${CheckoutErrorFragmentDoc}
`;
export type UpdateCheckoutShippingMethodMutationFn = Apollo.MutationFunction<
    UpdateCheckoutShippingMethodMutation,
    UpdateCheckoutShippingMethodMutationVariables
>;

/**
 * __useUpdateCheckoutShippingMethodMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutShippingMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutShippingMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutShippingMethodMutation, { data, loading, error }] = useUpdateCheckoutShippingMethodMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      shippingMethodId: // value for 'shippingMethodId'
 *   },
 * });
 */
export function useUpdateCheckoutShippingMethodMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateCheckoutShippingMethodMutation,
        UpdateCheckoutShippingMethodMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateCheckoutShippingMethodMutation,
        UpdateCheckoutShippingMethodMutationVariables
    >(UpdateCheckoutShippingMethodDocument, options);
}
export type UpdateCheckoutShippingMethodMutationHookResult = ReturnType<
    typeof useUpdateCheckoutShippingMethodMutation
>;
export type UpdateCheckoutShippingMethodMutationResult =
    Apollo.MutationResult<UpdateCheckoutShippingMethodMutation>;
export type UpdateCheckoutShippingMethodMutationOptions = Apollo.BaseMutationOptions<
    UpdateCheckoutShippingMethodMutation,
    UpdateCheckoutShippingMethodMutationVariables
>;
export const AddCheckoutPromoCodeDocument = gql`
    mutation AddCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
        checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                ...CheckoutError
            }
        }
    }
    ${CheckoutFragmentDoc}
    ${CheckoutErrorFragmentDoc}
`;
export type AddCheckoutPromoCodeMutationFn = Apollo.MutationFunction<
    AddCheckoutPromoCodeMutation,
    AddCheckoutPromoCodeMutationVariables
>;

/**
 * __useAddCheckoutPromoCodeMutation__
 *
 * To run a mutation, you first call `useAddCheckoutPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCheckoutPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCheckoutPromoCodeMutation, { data, loading, error }] = useAddCheckoutPromoCodeMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      promoCode: // value for 'promoCode'
 *   },
 * });
 */
export function useAddCheckoutPromoCodeMutation(
    baseOptions?: Apollo.MutationHookOptions<
        AddCheckoutPromoCodeMutation,
        AddCheckoutPromoCodeMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AddCheckoutPromoCodeMutation, AddCheckoutPromoCodeMutationVariables>(
        AddCheckoutPromoCodeDocument,
        options
    );
}
export type AddCheckoutPromoCodeMutationHookResult = ReturnType<typeof useAddCheckoutPromoCodeMutation>;
export type AddCheckoutPromoCodeMutationResult = Apollo.MutationResult<AddCheckoutPromoCodeMutation>;
export type AddCheckoutPromoCodeMutationOptions = Apollo.BaseMutationOptions<
    AddCheckoutPromoCodeMutation,
    AddCheckoutPromoCodeMutationVariables
>;
export const RemoveCheckoutPromoCodeDocument = gql`
    mutation RemoveCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
        checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
            checkout {
                ...Checkout
            }
            errors: checkoutErrors {
                ...CheckoutError
            }
        }
    }
    ${CheckoutFragmentDoc}
    ${CheckoutErrorFragmentDoc}
`;
export type RemoveCheckoutPromoCodeMutationFn = Apollo.MutationFunction<
    RemoveCheckoutPromoCodeMutation,
    RemoveCheckoutPromoCodeMutationVariables
>;

/**
 * __useRemoveCheckoutPromoCodeMutation__
 *
 * To run a mutation, you first call `useRemoveCheckoutPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCheckoutPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCheckoutPromoCodeMutation, { data, loading, error }] = useRemoveCheckoutPromoCodeMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      promoCode: // value for 'promoCode'
 *   },
 * });
 */
export function useRemoveCheckoutPromoCodeMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RemoveCheckoutPromoCodeMutation,
        RemoveCheckoutPromoCodeMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        RemoveCheckoutPromoCodeMutation,
        RemoveCheckoutPromoCodeMutationVariables
    >(RemoveCheckoutPromoCodeDocument, options);
}
export type RemoveCheckoutPromoCodeMutationHookResult = ReturnType<
    typeof useRemoveCheckoutPromoCodeMutation
>;
export type RemoveCheckoutPromoCodeMutationResult =
    Apollo.MutationResult<RemoveCheckoutPromoCodeMutation>;
export type RemoveCheckoutPromoCodeMutationOptions = Apollo.BaseMutationOptions<
    RemoveCheckoutPromoCodeMutation,
    RemoveCheckoutPromoCodeMutationVariables
>;
export const CreateCheckoutPaymentDocument = gql`
    mutation CreateCheckoutPayment($checkoutId: ID!, $paymentInput: PaymentInput!) {
        checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentInput) {
            checkout {
                ...Checkout
            }
            payment {
                ...Payment
            }
            errors: paymentErrors {
                ...PaymentError
            }
        }
    }
    ${CheckoutFragmentDoc}
    ${PaymentFragmentDoc}
    ${PaymentErrorFragmentDoc}
`;
export type CreateCheckoutPaymentMutationFn = Apollo.MutationFunction<
    CreateCheckoutPaymentMutation,
    CreateCheckoutPaymentMutationVariables
>;

/**
 * __useCreateCheckoutPaymentMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutPaymentMutation, { data, loading, error }] = useCreateCheckoutPaymentMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentInput: // value for 'paymentInput'
 *   },
 * });
 */
export function useCreateCheckoutPaymentMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateCheckoutPaymentMutation,
        CreateCheckoutPaymentMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateCheckoutPaymentMutation, CreateCheckoutPaymentMutationVariables>(
        CreateCheckoutPaymentDocument,
        options
    );
}
export type CreateCheckoutPaymentMutationHookResult = ReturnType<
    typeof useCreateCheckoutPaymentMutation
>;
export type CreateCheckoutPaymentMutationResult = Apollo.MutationResult<CreateCheckoutPaymentMutation>;
export type CreateCheckoutPaymentMutationOptions = Apollo.BaseMutationOptions<
    CreateCheckoutPaymentMutation,
    CreateCheckoutPaymentMutationVariables
>;
export const CompleteCheckoutDocument = gql`
    mutation CompleteCheckout(
        $checkoutId: ID!
        $paymentData: JSONString
        $redirectUrl: String
        $storeSource: Boolean
    ) {
        checkoutComplete(
            checkoutId: $checkoutId
            paymentData: $paymentData
            redirectUrl: $redirectUrl
            storeSource: $storeSource
        ) {
            errors: checkoutErrors {
                ...CheckoutError
            }
            order {
                ...OrderDetail
            }
            confirmationNeeded
            confirmationData
        }
    }
    ${CheckoutErrorFragmentDoc}
    ${OrderDetailFragmentDoc}
`;
export type CompleteCheckoutMutationFn = Apollo.MutationFunction<
    CompleteCheckoutMutation,
    CompleteCheckoutMutationVariables
>;

/**
 * __useCompleteCheckoutMutation__
 *
 * To run a mutation, you first call `useCompleteCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeCheckoutMutation, { data, loading, error }] = useCompleteCheckoutMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentData: // value for 'paymentData'
 *      redirectUrl: // value for 'redirectUrl'
 *      storeSource: // value for 'storeSource'
 *   },
 * });
 */
export function useCompleteCheckoutMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CompleteCheckoutMutation,
        CompleteCheckoutMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>(
        CompleteCheckoutDocument,
        options
    );
}
export type CompleteCheckoutMutationHookResult = ReturnType<typeof useCompleteCheckoutMutation>;
export type CompleteCheckoutMutationResult = Apollo.MutationResult<CompleteCheckoutMutation>;
export type CompleteCheckoutMutationOptions = Apollo.BaseMutationOptions<
    CompleteCheckoutMutation,
    CompleteCheckoutMutationVariables
>;
export const PasswordChangeDocument = gql`
    mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
        passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
            errors: accountErrors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type PasswordChangeMutationFn = Apollo.MutationFunction<
    PasswordChangeMutation,
    PasswordChangeMutationVariables
>;

/**
 * __usePasswordChangeMutation__
 *
 * To run a mutation, you first call `usePasswordChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordChangeMutation, { data, loading, error }] = usePasswordChangeMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      oldPassword: // value for 'oldPassword'
 *   },
 * });
 */
export function usePasswordChangeMutation(
    baseOptions?: Apollo.MutationHookOptions<PasswordChangeMutation, PasswordChangeMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<PasswordChangeMutation, PasswordChangeMutationVariables>(
        PasswordChangeDocument,
        options
    );
}
export type PasswordChangeMutationHookResult = ReturnType<typeof usePasswordChangeMutation>;
export type PasswordChangeMutationResult = Apollo.MutationResult<PasswordChangeMutation>;
export type PasswordChangeMutationOptions = Apollo.BaseMutationOptions<
    PasswordChangeMutation,
    PasswordChangeMutationVariables
>;
export const ResetPasswordRequestDocument = gql`
    mutation ResetPasswordRequest($email: String!, $redirectUrl: String!) {
        requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
            accountErrors {
                field
                message
                code
            }
        }
    }
`;
export type ResetPasswordRequestMutationFn = Apollo.MutationFunction<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
>;

/**
 * __useResetPasswordRequestMutation__
 *
 * To run a mutation, you first call `useResetPasswordRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordRequestMutation, { data, loading, error }] = useResetPasswordRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useResetPasswordRequestMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ResetPasswordRequestMutation,
        ResetPasswordRequestMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ResetPasswordRequestMutation, ResetPasswordRequestMutationVariables>(
        ResetPasswordRequestDocument,
        options
    );
}
export type ResetPasswordRequestMutationHookResult = ReturnType<typeof useResetPasswordRequestMutation>;
export type ResetPasswordRequestMutationResult = Apollo.MutationResult<ResetPasswordRequestMutation>;
export type ResetPasswordRequestMutationOptions = Apollo.BaseMutationOptions<
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables
>;
export const SetPasswordDocument = gql`
    mutation SetPassword($token: String!, $email: String!, $password: String!) {
        setPassword(token: $token, email: $email, password: $password) {
            errors: accountErrors {
                ...AccountError
            }
            token
            csrfToken
            user {
                ...User
            }
            accountErrors {
                field
                message
                code
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type SetPasswordMutationFn = Apollo.MutationFunction<
    SetPasswordMutation,
    SetPasswordMutationVariables
>;

/**
 * __useSetPasswordMutation__
 *
 * To run a mutation, you first call `useSetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPasswordMutation, { data, loading, error }] = useSetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSetPasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<SetPasswordMutation, SetPasswordMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<SetPasswordMutation, SetPasswordMutationVariables>(
        SetPasswordDocument,
        options
    );
}
export type SetPasswordMutationHookResult = ReturnType<typeof useSetPasswordMutation>;
export type SetPasswordMutationResult = Apollo.MutationResult<SetPasswordMutation>;
export type SetPasswordMutationOptions = Apollo.BaseMutationOptions<
    SetPasswordMutation,
    SetPasswordMutationVariables
>;
export const RegisterAccountDocument = gql`
    mutation RegisterAccount($email: String!, $password: String!, $redirectUrl: String!) {
        accountRegister(input: { email: $email, password: $password, redirectUrl: $redirectUrl }) {
            accountErrors {
                field
                message
                code
            }
            requiresConfirmation
        }
    }
`;
export type RegisterAccountMutationFn = Apollo.MutationFunction<
    RegisterAccountMutation,
    RegisterAccountMutationVariables
>;

/**
 * __useRegisterAccountMutation__
 *
 * To run a mutation, you first call `useRegisterAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAccountMutation, { data, loading, error }] = useRegisterAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useRegisterAccountMutation(
    baseOptions?: Apollo.MutationHookOptions<RegisterAccountMutation, RegisterAccountMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RegisterAccountMutation, RegisterAccountMutationVariables>(
        RegisterAccountDocument,
        options
    );
}
export type RegisterAccountMutationHookResult = ReturnType<typeof useRegisterAccountMutation>;
export type RegisterAccountMutationResult = Apollo.MutationResult<RegisterAccountMutation>;
export type RegisterAccountMutationOptions = Apollo.BaseMutationOptions<
    RegisterAccountMutation,
    RegisterAccountMutationVariables
>;
export const AccountUpdateDocument = gql`
    mutation AccountUpdate($input: AccountInput!) {
        accountUpdate(input: $input) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type AccountUpdateMutationFn = Apollo.MutationFunction<
    AccountUpdateMutation,
    AccountUpdateMutationVariables
>;

/**
 * __useAccountUpdateMutation__
 *
 * To run a mutation, you first call `useAccountUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountUpdateMutation, { data, loading, error }] = useAccountUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountUpdateMutation(
    baseOptions?: Apollo.MutationHookOptions<AccountUpdateMutation, AccountUpdateMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AccountUpdateMutation, AccountUpdateMutationVariables>(
        AccountUpdateDocument,
        options
    );
}
export type AccountUpdateMutationHookResult = ReturnType<typeof useAccountUpdateMutation>;
export type AccountUpdateMutationResult = Apollo.MutationResult<AccountUpdateMutation>;
export type AccountUpdateMutationOptions = Apollo.BaseMutationOptions<
    AccountUpdateMutation,
    AccountUpdateMutationVariables
>;
export const AccountConfirmDocument = gql`
    mutation accountConfirm($email: String!, $token: String!) {
        confirmAccount(email: $email, token: $token) {
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
    ${UserFragmentDoc}
    ${AccountErrorFragmentDoc}
`;
export type AccountConfirmMutationFn = Apollo.MutationFunction<
    AccountConfirmMutation,
    AccountConfirmMutationVariables
>;

/**
 * __useAccountConfirmMutation__
 *
 * To run a mutation, you first call `useAccountConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountConfirmMutation, { data, loading, error }] = useAccountConfirmMutation({
 *   variables: {
 *      email: // value for 'email'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAccountConfirmMutation(
    baseOptions?: Apollo.MutationHookOptions<AccountConfirmMutation, AccountConfirmMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AccountConfirmMutation, AccountConfirmMutationVariables>(
        AccountConfirmDocument,
        options
    );
}
export type AccountConfirmMutationHookResult = ReturnType<typeof useAccountConfirmMutation>;
export type AccountConfirmMutationResult = Apollo.MutationResult<AccountConfirmMutation>;
export type AccountConfirmMutationOptions = Apollo.BaseMutationOptions<
    AccountConfirmMutation,
    AccountConfirmMutationVariables
>;
export const AccountRequestDeletionDocument = gql`
    mutation accountRequestDeletion($channel: String!, $redirectUrl: String!) {
        accountRequestDeletion(channel: $channel, redirectUrl: $redirectUrl) {
            errors {
                ...AccountError
            }
        }
    }
    ${AccountErrorFragmentDoc}
`;
export type AccountRequestDeletionMutationFn = Apollo.MutationFunction<
    AccountRequestDeletionMutation,
    AccountRequestDeletionMutationVariables
>;

/**
 * __useAccountRequestDeletionMutation__
 *
 * To run a mutation, you first call `useAccountRequestDeletionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRequestDeletionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRequestDeletionMutation, { data, loading, error }] = useAccountRequestDeletionMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useAccountRequestDeletionMutation(
    baseOptions?: Apollo.MutationHookOptions<
        AccountRequestDeletionMutation,
        AccountRequestDeletionMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AccountRequestDeletionMutation, AccountRequestDeletionMutationVariables>(
        AccountRequestDeletionDocument,
        options
    );
}
export type AccountRequestDeletionMutationHookResult = ReturnType<
    typeof useAccountRequestDeletionMutation
>;
export type AccountRequestDeletionMutationResult =
    Apollo.MutationResult<AccountRequestDeletionMutation>;
export type AccountRequestDeletionMutationOptions = Apollo.BaseMutationOptions<
    AccountRequestDeletionMutation,
    AccountRequestDeletionMutationVariables
>;
export const AccountDeleteDocument = gql`
    mutation accountDelete($token: String!) {
        accountDelete(token: $token) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type AccountDeleteMutationFn = Apollo.MutationFunction<
    AccountDeleteMutation,
    AccountDeleteMutationVariables
>;

/**
 * __useAccountDeleteMutation__
 *
 * To run a mutation, you first call `useAccountDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountDeleteMutation, { data, loading, error }] = useAccountDeleteMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAccountDeleteMutation(
    baseOptions?: Apollo.MutationHookOptions<AccountDeleteMutation, AccountDeleteMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AccountDeleteMutation, AccountDeleteMutationVariables>(
        AccountDeleteDocument,
        options
    );
}
export type AccountDeleteMutationHookResult = ReturnType<typeof useAccountDeleteMutation>;
export type AccountDeleteMutationResult = Apollo.MutationResult<AccountDeleteMutation>;
export type AccountDeleteMutationOptions = Apollo.BaseMutationOptions<
    AccountDeleteMutation,
    AccountDeleteMutationVariables
>;
export const RequestEmailChangeDocument = gql`
    mutation requestEmailChange(
        $channel: String!
        $newEmail: String!
        $password: String!
        $redirectUrl: String!
    ) {
        requestEmailChange(
            channel: $channel
            newEmail: $newEmail
            password: $password
            redirectUrl: $redirectUrl
        ) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type RequestEmailChangeMutationFn = Apollo.MutationFunction<
    RequestEmailChangeMutation,
    RequestEmailChangeMutationVariables
>;

/**
 * __useRequestEmailChangeMutation__
 *
 * To run a mutation, you first call `useRequestEmailChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestEmailChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestEmailChangeMutation, { data, loading, error }] = useRequestEmailChangeMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      newEmail: // value for 'newEmail'
 *      password: // value for 'password'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useRequestEmailChangeMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RequestEmailChangeMutation,
        RequestEmailChangeMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RequestEmailChangeMutation, RequestEmailChangeMutationVariables>(
        RequestEmailChangeDocument,
        options
    );
}
export type RequestEmailChangeMutationHookResult = ReturnType<typeof useRequestEmailChangeMutation>;
export type RequestEmailChangeMutationResult = Apollo.MutationResult<RequestEmailChangeMutation>;
export type RequestEmailChangeMutationOptions = Apollo.BaseMutationOptions<
    RequestEmailChangeMutation,
    RequestEmailChangeMutationVariables
>;
export const ConfirmEmailChangeDocument = gql`
    mutation confirmEmailChange($channel: String!, $token: String!) {
        confirmEmailChange(channel: $channel, token: $token) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
    ${AccountErrorFragmentDoc}
    ${UserFragmentDoc}
`;
export type ConfirmEmailChangeMutationFn = Apollo.MutationFunction<
    ConfirmEmailChangeMutation,
    ConfirmEmailChangeMutationVariables
>;

/**
 * __useConfirmEmailChangeMutation__
 *
 * To run a mutation, you first call `useConfirmEmailChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailChangeMutation, { data, loading, error }] = useConfirmEmailChangeMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmEmailChangeMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ConfirmEmailChangeMutation,
        ConfirmEmailChangeMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ConfirmEmailChangeMutation, ConfirmEmailChangeMutationVariables>(
        ConfirmEmailChangeDocument,
        options
    );
}
export type ConfirmEmailChangeMutationHookResult = ReturnType<typeof useConfirmEmailChangeMutation>;
export type ConfirmEmailChangeMutationResult = Apollo.MutationResult<ConfirmEmailChangeMutation>;
export type ConfirmEmailChangeMutationOptions = Apollo.BaseMutationOptions<
    ConfirmEmailChangeMutation,
    ConfirmEmailChangeMutationVariables
>;
export const AttributesDocument = gql`
    query Attributes($id: ID!, $channel: String) {
        attributes(channel: $channel, filter: { inCategory: $id }, first: 100) {
            edges {
                node {
                    id
                    name
                    slug
                    choices(first: 100) {
                        edges {
                            node {
                                id
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * __useAttributesQuery__
 *
 * To run a query within a React component, call `useAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttributesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useAttributesQuery(
    baseOptions: Apollo.QueryHookOptions<AttributesQuery, AttributesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
}
export function useAttributesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<AttributesQuery, AttributesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
}
export type AttributesQueryHookResult = ReturnType<typeof useAttributesQuery>;
export type AttributesLazyQueryHookResult = ReturnType<typeof useAttributesLazyQuery>;
export type AttributesQueryResult = Apollo.QueryResult<AttributesQuery, AttributesQueryVariables>;
export const CategoryListDocument = gql`
    query CategoryList($first: Int!, $after: String) {
        categories(first: $first, after: $after) {
            edges {
                node {
                    ...BaseCategory
                }
            }
            totalCount
            pageInfo {
                ...PageInfo
            }
        }
    }
    ${BaseCategoryFragmentDoc}
    ${PageInfoFragmentDoc}
`;

/**
 * __useCategoryListQuery__
 *
 * To run a query within a React component, call `useCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCategoryListQuery(
    baseOptions: Apollo.QueryHookOptions<CategoryListQuery, CategoryListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CategoryListQuery, CategoryListQueryVariables>(
        CategoryListDocument,
        options
    );
}
export function useCategoryListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(
        CategoryListDocument,
        options
    );
}
export type CategoryListQueryHookResult = ReturnType<typeof useCategoryListQuery>;
export type CategoryListLazyQueryHookResult = ReturnType<typeof useCategoryListLazyQuery>;
export type CategoryListQueryResult = Apollo.QueryResult<CategoryListQuery, CategoryListQueryVariables>;
export const CategoryChildrenListDocument = gql`
    query CategoryChildrenList($id: ID!, $first: Int!, $after: String) {
        category(id: $id) {
            id
            children(first: $first, after: $after) {
                edges {
                    node {
                        ...BaseCategory
                    }
                }
                totalCount
                pageInfo {
                    ...PageInfo
                }
            }
        }
    }
    ${BaseCategoryFragmentDoc}
    ${PageInfoFragmentDoc}
`;

/**
 * __useCategoryChildrenListQuery__
 *
 * To run a query within a React component, call `useCategoryChildrenListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryChildrenListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryChildrenListQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCategoryChildrenListQuery(
    baseOptions: Apollo.QueryHookOptions<CategoryChildrenListQuery, CategoryChildrenListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CategoryChildrenListQuery, CategoryChildrenListQueryVariables>(
        CategoryChildrenListDocument,
        options
    );
}
export function useCategoryChildrenListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CategoryChildrenListQuery,
        CategoryChildrenListQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CategoryChildrenListQuery, CategoryChildrenListQueryVariables>(
        CategoryChildrenListDocument,
        options
    );
}
export type CategoryChildrenListQueryHookResult = ReturnType<typeof useCategoryChildrenListQuery>;
export type CategoryChildrenListLazyQueryHookResult = ReturnType<
    typeof useCategoryChildrenListLazyQuery
>;
export type CategoryChildrenListQueryResult = Apollo.QueryResult<
    CategoryChildrenListQuery,
    CategoryChildrenListQueryVariables
>;
export const CategoryAncestorsListDocument = gql`
    query CategoryAncestorsList($id: ID!, $first: Int!, $after: String) {
        category(id: $id) {
            id
            ancestors(first: $first, after: $after) {
                edges {
                    node {
                        ...BaseCategory
                    }
                }
                totalCount
                pageInfo {
                    ...PageInfo
                }
            }
        }
    }
    ${BaseCategoryFragmentDoc}
    ${PageInfoFragmentDoc}
`;

/**
 * __useCategoryAncestorsListQuery__
 *
 * To run a query within a React component, call `useCategoryAncestorsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryAncestorsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryAncestorsListQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCategoryAncestorsListQuery(
    baseOptions: Apollo.QueryHookOptions<
        CategoryAncestorsListQuery,
        CategoryAncestorsListQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CategoryAncestorsListQuery, CategoryAncestorsListQueryVariables>(
        CategoryAncestorsListDocument,
        options
    );
}
export function useCategoryAncestorsListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CategoryAncestorsListQuery,
        CategoryAncestorsListQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CategoryAncestorsListQuery, CategoryAncestorsListQueryVariables>(
        CategoryAncestorsListDocument,
        options
    );
}
export type CategoryAncestorsListQueryHookResult = ReturnType<typeof useCategoryAncestorsListQuery>;
export type CategoryAncestorsListLazyQueryHookResult = ReturnType<
    typeof useCategoryAncestorsListLazyQuery
>;
export type CategoryAncestorsListQueryResult = Apollo.QueryResult<
    CategoryAncestorsListQuery,
    CategoryAncestorsListQueryVariables
>;
export const CategoryDetailsDocument = gql`
    query CategoryDetails($id: ID, $slug: String) {
        category(id: $id, slug: $slug) {
            ...CategoryDetails
        }
    }
    ${CategoryDetailsFragmentDoc}
`;

/**
 * __useCategoryDetailsQuery__
 *
 * To run a query within a React component, call `useCategoryDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryDetailsQuery(
    baseOptions?: Apollo.QueryHookOptions<CategoryDetailsQuery, CategoryDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CategoryDetailsQuery, CategoryDetailsQueryVariables>(
        CategoryDetailsDocument,
        options
    );
}
export function useCategoryDetailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<CategoryDetailsQuery, CategoryDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CategoryDetailsQuery, CategoryDetailsQueryVariables>(
        CategoryDetailsDocument,
        options
    );
}
export type CategoryDetailsQueryHookResult = ReturnType<typeof useCategoryDetailsQuery>;
export type CategoryDetailsLazyQueryHookResult = ReturnType<typeof useCategoryDetailsLazyQuery>;
export type CategoryDetailsQueryResult = Apollo.QueryResult<
    CategoryDetailsQuery,
    CategoryDetailsQueryVariables
>;
export const CheckoutDetailsDocument = gql`
    query CheckoutDetails($token: UUID!) {
        checkout(token: $token) {
            ...Checkout
        }
    }
    ${CheckoutFragmentDoc}
`;

/**
 * __useCheckoutDetailsQuery__
 *
 * To run a query within a React component, call `useCheckoutDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutDetailsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckoutDetailsQuery(
    baseOptions: Apollo.QueryHookOptions<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>(
        CheckoutDetailsDocument,
        options
    );
}
export function useCheckoutDetailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>(
        CheckoutDetailsDocument,
        options
    );
}
export type CheckoutDetailsQueryHookResult = ReturnType<typeof useCheckoutDetailsQuery>;
export type CheckoutDetailsLazyQueryHookResult = ReturnType<typeof useCheckoutDetailsLazyQuery>;
export type CheckoutDetailsQueryResult = Apollo.QueryResult<
    CheckoutDetailsQuery,
    CheckoutDetailsQueryVariables
>;
export const UserCheckoutTokenListDocument = gql`
    query UserCheckoutTokenList($channel: String) {
        me {
            id
            checkoutTokens(channel: $channel)
        }
    }
`;

/**
 * __useUserCheckoutTokenListQuery__
 *
 * To run a query within a React component, call `useUserCheckoutTokenListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCheckoutTokenListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCheckoutTokenListQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useUserCheckoutTokenListQuery(
    baseOptions?: Apollo.QueryHookOptions<
        UserCheckoutTokenListQuery,
        UserCheckoutTokenListQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<UserCheckoutTokenListQuery, UserCheckoutTokenListQueryVariables>(
        UserCheckoutTokenListDocument,
        options
    );
}
export function useUserCheckoutTokenListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        UserCheckoutTokenListQuery,
        UserCheckoutTokenListQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<UserCheckoutTokenListQuery, UserCheckoutTokenListQueryVariables>(
        UserCheckoutTokenListDocument,
        options
    );
}
export type UserCheckoutTokenListQueryHookResult = ReturnType<typeof useUserCheckoutTokenListQuery>;
export type UserCheckoutTokenListLazyQueryHookResult = ReturnType<
    typeof useUserCheckoutTokenListLazyQuery
>;
export type UserCheckoutTokenListQueryResult = Apollo.QueryResult<
    UserCheckoutTokenListQuery,
    UserCheckoutTokenListQueryVariables
>;
export const CheckoutProductVariantsDocument = gql`
    query CheckoutProductVariants($ids: [ID], $channel: String) {
        productVariants(ids: $ids, first: 100, channel: $channel) {
            edges {
                node {
                    ...ProductVariant
                }
            }
        }
    }
    ${ProductVariantFragmentDoc}
`;

/**
 * __useCheckoutProductVariantsQuery__
 *
 * To run a query within a React component, call `useCheckoutProductVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutProductVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutProductVariantsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useCheckoutProductVariantsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        CheckoutProductVariantsQuery,
        CheckoutProductVariantsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CheckoutProductVariantsQuery, CheckoutProductVariantsQueryVariables>(
        CheckoutProductVariantsDocument,
        options
    );
}
export function useCheckoutProductVariantsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CheckoutProductVariantsQuery,
        CheckoutProductVariantsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CheckoutProductVariantsQuery, CheckoutProductVariantsQueryVariables>(
        CheckoutProductVariantsDocument,
        options
    );
}
export type CheckoutProductVariantsQueryHookResult = ReturnType<typeof useCheckoutProductVariantsQuery>;
export type CheckoutProductVariantsLazyQueryHookResult = ReturnType<
    typeof useCheckoutProductVariantsLazyQuery
>;
export type CheckoutProductVariantsQueryResult = Apollo.QueryResult<
    CheckoutProductVariantsQuery,
    CheckoutProductVariantsQueryVariables
>;
export const CollectionListDocument = gql`
    query CollectionList(
        $first: Int!
        $after: String
        $sortBy: CollectionSortingInput
        $filter: CollectionFilterInput
        $channel: String
    ) {
        collections(first: $first, after: $after, sortBy: $sortBy, filter: $filter, channel: $channel) {
            edges {
                node {
                    ...BaseCollection
                }
            }
            pageInfo {
                ...PageInfo
            }
            totalCount
        }
    }
    ${BaseCollectionFragmentDoc}
    ${PageInfoFragmentDoc}
`;

/**
 * __useCollectionListQuery__
 *
 * To run a query within a React component, call `useCollectionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      sortBy: // value for 'sortBy'
 *      filter: // value for 'filter'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useCollectionListQuery(
    baseOptions: Apollo.QueryHookOptions<CollectionListQuery, CollectionListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CollectionListQuery, CollectionListQueryVariables>(
        CollectionListDocument,
        options
    );
}
export function useCollectionListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<CollectionListQuery, CollectionListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CollectionListQuery, CollectionListQueryVariables>(
        CollectionListDocument,
        options
    );
}
export type CollectionListQueryHookResult = ReturnType<typeof useCollectionListQuery>;
export type CollectionListLazyQueryHookResult = ReturnType<typeof useCollectionListLazyQuery>;
export type CollectionListQueryResult = Apollo.QueryResult<
    CollectionListQuery,
    CollectionListQueryVariables
>;
export const CollectionDetailsDocument = gql`
    query CollectionDetails($id: ID, $slug: String, $channel: String) {
        collection(id: $id, slug: $slug, channel: $channel) {
            ...CollectionDetails
        }
    }
    ${CollectionDetailsFragmentDoc}
`;

/**
 * __useCollectionDetailsQuery__
 *
 * To run a query within a React component, call `useCollectionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useCollectionDetailsQuery(
    baseOptions?: Apollo.QueryHookOptions<CollectionDetailsQuery, CollectionDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<CollectionDetailsQuery, CollectionDetailsQueryVariables>(
        CollectionDetailsDocument,
        options
    );
}
export function useCollectionDetailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<CollectionDetailsQuery, CollectionDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<CollectionDetailsQuery, CollectionDetailsQueryVariables>(
        CollectionDetailsDocument,
        options
    );
}
export type CollectionDetailsQueryHookResult = ReturnType<typeof useCollectionDetailsQuery>;
export type CollectionDetailsLazyQueryHookResult = ReturnType<typeof useCollectionDetailsLazyQuery>;
export type CollectionDetailsQueryResult = Apollo.QueryResult<
    CollectionDetailsQuery,
    CollectionDetailsQueryVariables
>;
export const OrdersByUserDocument = gql`
    query OrdersByUser($perPage: Int!, $after: String) {
        me {
            id
            orders(first: $perPage, after: $after) {
                pageInfo {
                    hasNextPage
                    endCursor
                }
                edges {
                    node {
                        id
                        token
                        number
                        statusDisplay
                        created
                        total {
                            gross {
                                amount
                                currency
                            }
                            net {
                                amount
                                currency
                            }
                        }
                        lines {
                            id
                            variant {
                                id
                                product {
                                    name
                                    id
                                    slug
                                }
                            }
                            thumbnail {
                                alt
                                url
                            }
                            thumbnail2x: thumbnail(size: 510) {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * __useOrdersByUserQuery__
 *
 * To run a query within a React component, call `useOrdersByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersByUserQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useOrdersByUserQuery(
    baseOptions: Apollo.QueryHookOptions<OrdersByUserQuery, OrdersByUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<OrdersByUserQuery, OrdersByUserQueryVariables>(
        OrdersByUserDocument,
        options
    );
}
export function useOrdersByUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<OrdersByUserQuery, OrdersByUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<OrdersByUserQuery, OrdersByUserQueryVariables>(
        OrdersByUserDocument,
        options
    );
}
export type OrdersByUserQueryHookResult = ReturnType<typeof useOrdersByUserQuery>;
export type OrdersByUserLazyQueryHookResult = ReturnType<typeof useOrdersByUserLazyQuery>;
export type OrdersByUserQueryResult = Apollo.QueryResult<OrdersByUserQuery, OrdersByUserQueryVariables>;
export const OrderByTokenDocument = gql`
    query OrderByToken($token: UUID!) {
        orderByToken(token: $token) {
            ...OrderDetail
        }
    }
    ${OrderDetailFragmentDoc}
`;

/**
 * __useOrderByTokenQuery__
 *
 * To run a query within a React component, call `useOrderByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useOrderByTokenQuery(
    baseOptions: Apollo.QueryHookOptions<OrderByTokenQuery, OrderByTokenQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<OrderByTokenQuery, OrderByTokenQueryVariables>(
        OrderByTokenDocument,
        options
    );
}
export function useOrderByTokenLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<OrderByTokenQuery, OrderByTokenQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<OrderByTokenQuery, OrderByTokenQueryVariables>(
        OrderByTokenDocument,
        options
    );
}
export type OrderByTokenQueryHookResult = ReturnType<typeof useOrderByTokenQuery>;
export type OrderByTokenLazyQueryHookResult = ReturnType<typeof useOrderByTokenLazyQuery>;
export type OrderByTokenQueryResult = Apollo.QueryResult<OrderByTokenQuery, OrderByTokenQueryVariables>;
export const UserOrderByTokenDocument = gql`
    query UserOrderByToken($token: UUID!) {
        orderByToken(token: $token) {
            ...OrderDetail
            invoices {
                ...InvoiceFragment
            }
        }
    }
    ${OrderDetailFragmentDoc}
    ${InvoiceFragmentDoc}
`;

/**
 * __useUserOrderByTokenQuery__
 *
 * To run a query within a React component, call `useUserOrderByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserOrderByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserOrderByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUserOrderByTokenQuery(
    baseOptions: Apollo.QueryHookOptions<UserOrderByTokenQuery, UserOrderByTokenQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<UserOrderByTokenQuery, UserOrderByTokenQueryVariables>(
        UserOrderByTokenDocument,
        options
    );
}
export function useUserOrderByTokenLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<UserOrderByTokenQuery, UserOrderByTokenQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<UserOrderByTokenQuery, UserOrderByTokenQueryVariables>(
        UserOrderByTokenDocument,
        options
    );
}
export type UserOrderByTokenQueryHookResult = ReturnType<typeof useUserOrderByTokenQuery>;
export type UserOrderByTokenLazyQueryHookResult = ReturnType<typeof useUserOrderByTokenLazyQuery>;
export type UserOrderByTokenQueryResult = Apollo.QueryResult<
    UserOrderByTokenQuery,
    UserOrderByTokenQueryVariables
>;
export const ProductListDocument = gql`
    query ProductList(
        $after: String
        $first: Int!
        $sortBy: ProductOrder
        $filter: ProductFilterInput
        $channel: String
    ) {
        products(after: $after, first: $first, sortBy: $sortBy, filter: $filter, channel: $channel) {
            edges {
                node {
                    ...BaseProduct
                    ...ProductPricingField
                }
            }
            totalCount
            pageInfo {
                ...PageInfo
            }
        }
    }
    ${BaseProductFragmentDoc}
    ${ProductPricingFieldFragmentDoc}
    ${PageInfoFragmentDoc}
`;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      sortBy: // value for 'sortBy'
 *      filter: // value for 'filter'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useProductListQuery(
    baseOptions: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
}
export function useProductListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(
        ProductListDocument,
        options
    );
}
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export const ProductDetailsDocument = gql`
    query ProductDetails(
        $id: ID
        $slug: String
        $countryCode: CountryCode
        $channel: String
        $variantSelection: VariantAttributeScope = ALL
    ) {
        product(id: $id, slug: $slug, channel: $channel) {
            ...ProductDetails
        }
    }
    ${ProductDetailsFragmentDoc}
`;

/**
 * __useProductDetailsQuery__
 *
 * To run a query within a React component, call `useProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *      countryCode: // value for 'countryCode'
 *      channel: // value for 'channel'
 *      variantSelection: // value for 'variantSelection'
 *   },
 * });
 */
export function useProductDetailsQuery(
    baseOptions?: Apollo.QueryHookOptions<ProductDetailsQuery, ProductDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ProductDetailsQuery, ProductDetailsQueryVariables>(
        ProductDetailsDocument,
        options
    );
}
export function useProductDetailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailsQuery, ProductDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ProductDetailsQuery, ProductDetailsQueryVariables>(
        ProductDetailsDocument,
        options
    );
}
export type ProductDetailsQueryHookResult = ReturnType<typeof useProductDetailsQuery>;
export type ProductDetailsLazyQueryHookResult = ReturnType<typeof useProductDetailsLazyQuery>;
export type ProductDetailsQueryResult = Apollo.QueryResult<
    ProductDetailsQuery,
    ProductDetailsQueryVariables
>;
export const VariantsProductsDocument = gql`
    query VariantsProducts($ids: [ID], $channel: String) {
        productVariants(ids: $ids, first: 100, channel: $channel) {
            edges {
                node {
                    id
                    product {
                        id
                        productType {
                            isShippingRequired
                        }
                    }
                }
            }
        }
    }
`;

/**
 * __useVariantsProductsQuery__
 *
 * To run a query within a React component, call `useVariantsProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantsProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantsProductsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useVariantsProductsQuery(
    baseOptions?: Apollo.QueryHookOptions<VariantsProductsQuery, VariantsProductsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<VariantsProductsQuery, VariantsProductsQueryVariables>(
        VariantsProductsDocument,
        options
    );
}
export function useVariantsProductsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<VariantsProductsQuery, VariantsProductsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<VariantsProductsQuery, VariantsProductsQueryVariables>(
        VariantsProductsDocument,
        options
    );
}
export type VariantsProductsQueryHookResult = ReturnType<typeof useVariantsProductsQuery>;
export type VariantsProductsLazyQueryHookResult = ReturnType<typeof useVariantsProductsLazyQuery>;
export type VariantsProductsQueryResult = Apollo.QueryResult<
    VariantsProductsQuery,
    VariantsProductsQueryVariables
>;
export const GetShopDocument = gql`
    query GetShop {
        shop {
            displayGrossPrices
            defaultCountry {
                code
                country
            }
            countries {
                country
                code
            }
        }
    }
`;

/**
 * __useGetShopQuery__
 *
 * To run a query within a React component, call `useGetShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShopQuery(
    baseOptions?: Apollo.QueryHookOptions<GetShopQuery, GetShopQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
}
export function useGetShopLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetShopQuery, GetShopQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
}
export type GetShopQueryHookResult = ReturnType<typeof useGetShopQuery>;
export type GetShopLazyQueryHookResult = ReturnType<typeof useGetShopLazyQuery>;
export type GetShopQueryResult = Apollo.QueryResult<GetShopQuery, GetShopQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($cursor: String, $perPage: Int, $channel: String) {
        products(after: $cursor, first: $perPage, channel: $channel) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      perPage: // value for 'perPage'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetProductsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export function useGetProductsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
        GetProductsDocument,
        options
    );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($cursor: String, $perPage: Int) {
        categories(after: $cursor, first: $perPage) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetCategoriesQuery(
    baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
        GetCategoriesDocument,
        options
    );
}
export function useGetCategoriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
        GetCategoriesDocument,
        options
    );
}
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
>;
export const GetCollectionsDocument = gql`
    query GetCollections($cursor: String, $perPage: Int) {
        collections(after: $cursor, first: $perPage) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

/**
 * __useGetCollectionsQuery__
 *
 * To run a query within a React component, call `useGetCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetCollectionsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(
        GetCollectionsDocument,
        options
    );
}
export function useGetCollectionsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(
        GetCollectionsDocument,
        options
    );
}
export type GetCollectionsQueryHookResult = ReturnType<typeof useGetCollectionsQuery>;
export type GetCollectionsLazyQueryHookResult = ReturnType<typeof useGetCollectionsLazyQuery>;
export type GetCollectionsQueryResult = Apollo.QueryResult<
    GetCollectionsQuery,
    GetCollectionsQueryVariables
>;
export const UserDetailsDocument = gql`
    query UserDetails {
        user: me {
            ...User
        }
        authenticated @client
        authenticating @client
    }
    ${UserFragmentDoc}
`;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDetailsQuery(
    baseOptions?: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
}
export function useUserDetailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(
        UserDetailsDocument,
        options
    );
}
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;
