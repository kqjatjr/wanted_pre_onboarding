# 원티드 프리 온보딩 코스 ( wanted_pre_onboarding)

---

## 사용기술

- React, TypeScript, sass

## Toggle

### 구현한 방법과 이유에 대한 간략한 내용

- 토글이 온/오프 상태인지 여부와, 토글의 아이디, 토글의 클릭했을시 동작하는 이벤트를 prop으로 전달받아 작동하게 구현

### 자세한 실행 방법

- 토글 버튼을 클릭하면 현재 토글 버튼의 상태에 따라 true/false로 상태가 변환된다.
- 토글의 상태에 따라서 공이 좌/우로 이동한다.
- 토글의 상태에 따라서 텍스트의 문구가 변경된다.
- Props

| 이름          | 타입      | 기본값 | 설명                                       |
| ------------- | --------- | ------ | ------------------------------------------ |
| `checked`     | `boolean` |        | 토글이 누른 상태인지 아닌지의 상태         |
| `id`          | `string`  |        | 토글의 id                                  |
| `clickToggle` | `func`    |        | 토글 버튼을 클릭했을때의 함수 `() => void` |

## ClickToEdit

### 구현한 방법과 이유에 대한 간략한 내용

- 재사용성을 살리기위해 labelName, value, onChange를 prop으로 받아 이름과 나이를 재사용하여 구현
- 더블클릭하면 div -> input 변경되는 로직과 인풋값을 입력하고 포커스 아웃을 하면 다시 div로 변경되며 인풋 값이 반영이 되게 구현

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

- 외부에서 value 값이 변경되는 상황을 구현하기위해 useEffect로 value값이 변하면 내부 컴포넌트 내부 변수인 value의 값 변경

### 자세한 실행 방법

- 이름과 나이의 박스를 더블클릭하면 입력할 수 있습니다.
- 입력후 다른 화면을 클릭하면 값이 반영되어 이름 @@ 나이 @@ 로 변경됩니다.
- Props

| 이름        | 타입      | 기본값 | 설명                                                                                   |
| ----------- | --------- | ------ | -------------------------------------------------------------------------------------- |
| `labelName` | `string`  |        | 사용자가 지정한 label의 이름                                                           |
| `value`     | `string`  |        | 사용자가 입력한 인풋의 value값                                                         |
| `onChange`  | `func`    |        | 사용자가 입력한 인풋 값의 변경 함수 `(e: React.ChangeEvent<HTMLInputElement>) => void` |
| `disabled`  | `boolean` |        | 인풋의 활성화/비활성화 여부                                                            |

## AutoComplete

### 구현한 방법과 이유에 대한 간략한 내용

- 과거 검색 이록이 나오는 컴포넌트로 생각하고 구현
- 사용자가 검색을 하면 그 검색 기록이 저장되며 이후 이전 검색에 포함되는 키워드를 입력하면 그 검색 이력이 나오게 구현

### 자세한 실행 방법

- 사용자가 검색을 하면 검색 기록에 기록이 저장됩니다.
- 이후에 검색 할때 검색기록에 포함된 키워드를 입력한다면 비슷한 키워드를 화면에 출력해줍니다.
- 사용자가 지우고 싶은 키워드의 우측에 x 버튼을 클릭하면 해당 키워드는 삭제됩니다.
- Props

| 이름           | 타입                            | 기본값                                                                                                         | 설명                                                                                              |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `value`        | `string`                        |                                                                                                                | 사용자가 입력한 키워드                                                                            |
| `onChange`     | `func`                          |                                                                                                                | 사용자가 입력한 값 변경하는 이벤트 `(value: string) => void`                                      |
| `suggestions`  | `{id: string; name: string;}[]` |                                                                                                                | 사용자가 검색한 값의 배열                                                                         |
| `onRemoveWord` | `func`                          |                                                                                                                | 과거 검색 이력을 지우는 함수 ` () => void`                                                        |
| `onKeyPress`   | `func`                          |                                                                                                                | 사용자가 검색하기 위해 키를 입력한 것을 받는 함수 `(e: KeyboardEvent<HTMLInputElement>) => void;` |
| `onFilter`     | `func`                          | `(value: string, list: TWord[]) => list.filter((filter) => value.length !== 0 && filter.name.includes(value))` | 사용자가 검색한 값을 이전 검색 이력에서 찾는 함수                                                 |
| `disabled`     | `boolean`                       |                                                                                                                | 인풋의 활성화 비활성화 여부                                                                       |

## Modal

### 구현한 방법과 이유에 대한 간략한 내용

- 재사용을 생각하여 전역으로 모달 상태를 관리하고 모달의 열고 닫기 이벤트 구현
- 모달의 상태를 전역으로 관리하여 어느 컴포넌트든 모달을 닫을 수 있게 구현

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

- 초기에는 모달의 상태를 전역으로 하지 않았지만 모달의 상태를 전역으로 관리하여 다른 컴포넌트에서 닫을 수 있게 하기위해 context api를 통해 구현

### 자세한 실행 방법

- modalContext
  | 이름 | 타입 | 기본값 | 설명 |
  | ------------- | --------- | ------ | ------------------------------------------ |
  | `modalState` | `boolean` | `false` | 모달창 활성화/비활성화 상태 |
  | `closeModal` | `func` | `() => void` | 모달창의 상태를 비활성화로 만드는 함수 |
  | `openModal` | `func` | `(option: {content : ReactNode}) => void` | 모달창 내부의 내용을 받고 모달창의 상태를 `true`로 활성화 하는 함수 |

- `const { openModal } = useModal()`로 모달을 여는 함수를 불러와 버튼에 넣는다.
- Open Modal 버튼을 클릭하면 모달창 출력
- 모달창의 x 버튼을 클릭하면 모달창 닫기

## Tab

### 구현한 방법과 이유에 대한 간략한 내용

- 추후에 Tab 버튼의 확장성을 고려하여 currTab(현재 출력되는 탭), tabList(탭들의 리스트), onSelectTab(탭 클릭)를 prop으로 받게 구현

### 자세한 실행 방법

- 초기 탭은 Tab1이고 그 이후에 원하는 탭을 클릭하면 해당 탭에 대응되는 내용이 출력됩니다.
- Props

| 이름          | 타입                 | 기본값 | 설명                                                           |
| ------------- | -------------------- | ------ | -------------------------------------------------------------- |
| `currTab`     | `string`             |        | 사용자가 현재 선택한 탭                                        |
| `tabList`     | `{title : string}[]` |        | 탭의 타이틀 의 배열                                            |
| `onSelectTab` | `func`               |        | 사용자가 탭을 선택할때 사용하는 함수 `(title: string) => void` |

## Tag

### 구현한 방법과 이유에 대한 간략한 내용

- 재사용 성을 고려하여 tagArray(추가된 태그들의 배열), delimiters(태그를 추가할때 작동하는 키 설정), placeholder, onRemoveTag(태그 삭제), idGenerator(태그들의 id), disabled(인풋 창의 활성/비활성), onAddTag(태그 추가)를 prop으로 받게 구현

### 자세한 실행 방법

- 인풋에 값을 입력하고 사용자가 지정한 키를 입력하면(ex: Enter) 태그가 추가되여 화면에 출력
- 태그의 우측에 X 버튼을 클릭하면 태그 삭제
- Props

| 이름          | 타입                                     | 기본값                     | 설명                                                                                |
| ------------- | ---------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------- |
| `tagArray`    | `{id: string or number; name: string}[]` |                            | 추가된 태크들의 배열                                                                |
| `delimiters`  | `string[]`                               | `["Enter"]`                | 태그를 추가할때 사용자가 누를 키들의 배열                                           |
| `placeholder` | `string`                                 | `"Press enter to add tag"` | 인풋의 placeholder                                                                  |
| `onRemoveTag` | `func`                                   |                            | 태그를 지울때 사용하는 함수                                                         |
| `onAddTag`    | `func`                                   |                            | 태그를 지울때 사용하는 함수 `(tag: { id: string or number; name: string};) => void` |
| `idGenerator` | `func`                                   | `(name: string) => name`   | 태그의 아이디를 생성할때 사용하는 함수                                              |
| `disabled`    | `boolean`                                |                            | 인풋의 활성화/비활성화 여부                                                         |

## 전체적으로 구현하면서 생각한점

- 재사용을 하기위해 해당 컴포넌트가 어떤 값을 prop으로 받아야 하는지에 대해 고민을 많이 하였습니다. 이 값을 prop으로 받으면 어떤 부분이 좋을지는 고민하여 구현하였습니다.
