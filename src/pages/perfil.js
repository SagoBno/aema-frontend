import ProfileForm from 'components/@forms/ProfileForm';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';
import useProfileForm from 'hooks/forms/useProfileForm';
import useUser from 'hooks/useUser';
import { updateUser } from 'services/auth';

function ProfilePage() {
  const { user } = useUser();
  const [
    {
      errors,
      isSubmitting,
      registerParentFirstNameInput,
      registerParentLastNameInput,
      registerParentBirthdayInput,
      registerChildFirstNameInput,
      registerChildLastNameInput,
      registerGenreInput,
      registerChildBirthdayInput,
      registerPrivacyPoliciesInput,
    },
    { onSubmit },
  ] = useProfileForm({ user, onSubmit: updateUser });

  return (
    <main className="w-full h-full p-5 md:p-8 bg-general-bg">
      <h1 className="text-center text-3xl font-bold mt-5">Actualizar perfil</h1>
      <div className="mt-10">
        <ProfileForm
          errors={errors}
          isSubmitting={isSubmitting}
          parentFirstNameInput={registerParentFirstNameInput()}
          parentLastNameInput={registerParentLastNameInput()}
          parentBirthdayInput={registerParentBirthdayInput()}
          childFirstNameInput={registerChildFirstNameInput()}
          childLastNameInput={registerChildLastNameInput()}
          genreInput={registerGenreInput()}
          childBirthdayInput={registerChildBirthdayInput()}
          privacyPoliciesInput={registerPrivacyPoliciesInput()}
          onSubmit={onSubmit}
          isEditing
        />
      </div>
    </main>
  );
}

ProfilePage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

ProfilePage.meta = {
  loginRequired: true,
};

export default ProfilePage;
