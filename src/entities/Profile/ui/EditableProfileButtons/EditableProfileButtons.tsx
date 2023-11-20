import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import {
  getProfileIsLoading, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import s from './EditableProfileButtons.module.scss';

interface EditableProfileButtonsProps {
  className?: string;
}

export const EditableProfileButtons: FC<EditableProfileButtonsProps> = ({ className }) => {
  const { t } = useTranslation();
  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useDispatch();

  const onClickChangeButton = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onClickCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
  };

  const onClickSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <div className={classNames(className, s.buttonsWrapper)}>
      {readOnly ? (
        <Button
          typeButton="ButtonSquare"
          isLoading={isLoading}
          classNameWrapper={s.button}
          onClick={onClickChangeButton}
        >
          {t('Change')}
        </Button>
      ) : (
        <>
          <Button
            typeButton="ButtonSquare"
            isLoading={isLoading}
            classNameWrapper={s.button}
            onClick={onClickCancelEdit}
            invertedTheme
          >
            {t('Cancel')}
          </Button>
          <Button
            typeButton="ButtonSquare"
            isLoading={isLoading}
            classNameWrapper={s.button}
            onClick={onClickSave}
          >
            {t('Save')}
          </Button>
        </>
      )}
    </div>
  );
};
